import NumberFlow from "@number-flow/react";
import React from "react";

type Plan = {
  name: string;
  monthly: number;
  annual: number;
  badge?: string;
};

export function PricingInteraction({
  plans,
  monthlyLabel = "Monthly",
  yearlyLabel = "Yearly",
  perMonthLabel = "/month",
  ctaLabel = "Get started",
  onSelect,
}: {
  plans: [Plan, Plan, Plan];
  monthlyLabel?: string;
  yearlyLabel?: string;
  perMonthLabel?: string;
  ctaLabel?: string;
  onSelect?: (planIndex: number, period: 0 | 1) => void;
}) {
  const [active, setActive] = React.useState(1);
  const [period, setPeriod] = React.useState<0 | 1>(0);

  const values = plans.map((p) => (period === 0 ? p.monthly : p.annual));

  return (
    <div className="border border-border rounded-[32px] p-3 shadow-xl shadow-foreground/5 max-w-md w-full flex flex-col items-center gap-3 bg-card backdrop-blur">
      {/* period toggle */}
      <div className="rounded-full relative w-full bg-muted/60 p-1.5 flex items-center">
        <button
          className="font-medium rounded-full w-full p-2 text-foreground z-20 text-sm"
          onClick={() => setPeriod(0)}
        >
          {monthlyLabel}
        </button>
        <button
          className="font-medium rounded-full w-full p-2 text-foreground z-20 text-sm"
          onClick={() => setPeriod(1)}
        >
          {yearlyLabel}
        </button>
        <div
          className="p-1.5 absolute inset-0 w-1/2 z-10"
          style={{
            transform: `translateX(${period * 100}%)`,
            transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
          }}
        >
          <div className="bg-background shadow-sm rounded-full w-full h-full" />
        </div>
      </div>

      {/* plans */}
      <div className="w-full relative flex flex-col items-center justify-center gap-3">
        {plans.map((p, i) => (
          <button
            key={p.name}
            type="button"
            className="w-full flex justify-between items-center cursor-pointer border border-border p-4 rounded-2xl text-left bg-background/40 hover:bg-background/70 transition-colors"
            onClick={() => setActive(i)}
          >
            <div className="flex flex-col items-start">
              <p className="font-semibold text-lg flex items-center gap-2 text-foreground">
                {p.name}
                {p.badge && (
                  <span className="py-0.5 px-2 rounded-full bg-primary/10 text-primary text-[11px] font-medium uppercase tracking-wider">
                    {p.badge}
                  </span>
                )}
              </p>
              <p className="text-muted-foreground text-sm flex">
                <span className="text-foreground font-medium flex items-center">
                  $
                  <NumberFlow
                    className="text-foreground font-medium"
                    value={values[i]}
                  />
                </span>
                {perMonthLabel}
              </p>
            </div>
            <div
              className="border-2 size-6 rounded-full p-1 flex items-center justify-center"
              style={{
                borderColor: active === i ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                transition: "border-color 0.3s",
              }}
            >
              <div
                className="size-3 bg-foreground rounded-full"
                style={{
                  opacity: active === i ? 1 : 0,
                  transition: "opacity 0.3s",
                }}
              />
            </div>
          </button>
        ))}
        <div
          className="w-full h-[80px] absolute top-0 border-2 border-foreground rounded-2xl pointer-events-none"
          style={{
            transform: `translateY(${active * 80 + 12 * active}px)`,
            transition: "transform 0.35s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </div>

      <button
        onClick={() => onSelect?.(active, period)}
        className="rounded-full bg-foreground text-background text-base w-full p-3.5 font-medium active:scale-[0.98] hover:bg-foreground/90 transition-all duration-300"
      >
        {ctaLabel}
      </button>
    </div>
  );
}
