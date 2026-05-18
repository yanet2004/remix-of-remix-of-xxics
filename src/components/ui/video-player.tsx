import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

type VideoPlayerProps = {
  youtubeId: string;
  className?: string;
};

export function VideoPlayer({ youtubeId, className }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => {
    setPlaying(true);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0`;

  return (
    <div className={cn("relative overflow-hidden rounded-3xl bg-black group", className)}>
      {!playing ? (
        <>
          <img
            src={thumbnailUrl}
            alt="Video thumbnail"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
          <button
            onClick={handlePlay}
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
              <Play className="w-6 h-6 md:w-8 md:h-8 text-foreground fill-foreground translate-x-0.5" />
            </div>
          </button>
        </>
      ) : (
        <iframe
          ref={iframeRef}
          src={embedUrl}
          title="XXICS video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
}
