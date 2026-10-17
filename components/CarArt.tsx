type Variant = "sedan" | "compact" | "suv";

const shapes: Record<
  Variant,
  { body: string; glass: string; pillar: string; wheels: [number, number]; r: number; y: number }
> = {
  sedan: {
    body: "M14 78 L14 66 Q14 58 24 56 L62 50 L88 28 Q92 24 98 24 L158 24 Q164 24 168 28 L196 50 L238 56 Q248 58 248 66 L248 78 Z",
    glass: "M94 31 L158 31 L182 50 L72 50 Z",
    pillar: "M128 31 L128 50",
    wheels: [62, 198],
    r: 17,
    y: 80,
  },
  compact: {
    body: "M22 78 L22 48 Q22 34 36 30 L148 24 Q156 24 160 28 L196 52 L236 58 Q244 60 244 68 L244 78 Z",
    glass: "M36 48 Q36 39 44 37 L146 31 L184 52 L36 52 Z",
    pillar: "M104 33 L104 52",
    wheels: [66, 198],
    r: 17,
    y: 80,
  },
  suv: {
    body: "M12 80 L12 54 Q12 44 22 42 L44 38 Q52 36 58 30 L74 18 Q78 14 84 14 L186 14 Q192 14 196 18 L212 36 L240 44 Q250 46 250 56 L250 80 Z",
    glass: "M66 36 L80 21 L184 21 L202 38 Z",
    pillar: "M132 21 L132 38",
    wheels: [62, 200],
    r: 19,
    y: 82,
  },
};

export default function CarArt({
  variant = "sedan",
  color = "#1D4ED8",
  className = "",
}: {
  variant?: Variant;
  color?: string;
  className?: string;
}) {
  const s = shapes[variant];
  return (
    <svg
      viewBox="0 0 262 104"
      className={className}
      role="img"
      aria-label={`Illustration of a ${variant === "suv" ? "large SUV" : variant === "compact" ? "compact car" : "sedan"}`}
    >
      <ellipse cx="131" cy="99" rx="108" ry="4" fill="#0F172A" opacity="0.08" />
      <path d={s.body} fill={color} />
      <path d={s.glass} fill="#DBEAFE" opacity="0.92" />
      <path d={s.pillar} stroke={color} strokeWidth="3" />
      <rect x="236" y="62" width="10" height="5" rx="2" fill="#FCD34D" />
      <rect x={variant === "compact" ? 22 : 12} y="62" width="6" height="5" rx="2" fill="#F87171" />
      {s.wheels.map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy={s.y} r={s.r} fill="#111827" />
          <circle cx={cx} cy={s.y} r={s.r - 9} fill="#E5E7EB" />
          <circle cx={cx} cy={s.y} r="2.5" fill="#9CA3AF" />
        </g>
      ))}
    </svg>
  );
}
