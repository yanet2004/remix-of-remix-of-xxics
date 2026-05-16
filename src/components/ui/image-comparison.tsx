import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, useMotionValue, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

type Ctx = {
  sliderPosition: number;
  setSliderPosition: (n: number) => void;
  motionSliderPosition: MotionValue<number>;
};

const ImageComparisonContext = createContext<Ctx | null>(null);

export function ImageComparison({
  className,
  children,
  initial = 50,
}: {
  className?: string;
  children: ReactNode;
  initial?: number;
}) {
  const [sliderPosition, setSliderPosition] = useState(initial);
  const motionSliderPosition = useMotionValue(initial);
  const dragging = useRef(false);

  const update = useCallback(
    (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent, el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const clientX =
        "touches" in event
          ? (event as TouchEvent).touches[0].clientX
          : (event as MouseEvent).clientX;
      const x = clientX - rect.left;
      const pct = Math.min(Math.max((x / rect.width) * 100, 0), 100);
      motionSliderPosition.set(pct);
      setSliderPosition(pct);
    },
    [motionSliderPosition],
  );

  return (
    <ImageComparisonContext.Provider
      value={{ sliderPosition, setSliderPosition, motionSliderPosition }}
    >
      <div
        className={cn("relative overflow-hidden select-none touch-none", className)}
        onMouseDown={(e) => {
          dragging.current = true;
          update(e, e.currentTarget);
        }}
        onMouseMove={(e) => {
          if (dragging.current) update(e, e.currentTarget);
        }}
        onMouseUp={() => (dragging.current = false)}
        onMouseLeave={() => (dragging.current = false)}
        onTouchStart={(e) => {
          dragging.current = true;
          update(e, e.currentTarget);
        }}
        onTouchMove={(e) => {
          if (dragging.current) update(e, e.currentTarget);
        }}
        onTouchEnd={() => (dragging.current = false)}
      >
        {children}
      </div>
    </ImageComparisonContext.Provider>
  );
}

export function ImageComparisonImage({
  src,
  alt,
  position,
  className,
}: {
  src: string;
  alt: string;
  position: "left" | "right";
  className?: string;
}) {
  const ctx = useContext(ImageComparisonContext)!;
  const leftClip = useTransform(ctx.motionSliderPosition, (v) => `inset(0 ${100 - v}% 0 0)`);
  const rightClip = useTransform(ctx.motionSliderPosition, (v) => `inset(0 0 0 ${v}%)`);
  return (
    <motion.img
      src={src}
      alt={alt}
      draggable={false}
      className={cn("absolute inset-0 w-full h-full object-cover", className)}
      style={{ clipPath: position === "left" ? leftClip : rightClip }}
    />
  );
}

export function ImageComparisonSlider({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const ctx = useContext(ImageComparisonContext)!;
  const left = useTransform(ctx.motionSliderPosition, (v) => `${v}%`);
  return (
    <motion.div
      className={cn("absolute top-0 bottom-0 w-1 cursor-ew-resize -translate-x-1/2", className)}
      style={{ left }}
    >
      {children}
    </motion.div>
  );
}