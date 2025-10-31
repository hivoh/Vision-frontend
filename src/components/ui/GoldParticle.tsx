import React, { useMemo } from "react";

export type GoldParticlesProps = {
  count?: number;
  minSize?: number;
  maxSize?: number;
  minDuration?: number;
  maxDuration?: number;
  minDelay?: number;
  maxDelay?: number;
  minOpacity?: number;
  maxOpacity?: number;
  minBlur?: number;
  maxBlur?: number;
  className?: string;
  zIndex?: number;
};

const rand = (min: number, max: number) => Math.random() * (max - min) + min;


const GoldParticles: React.FC<GoldParticlesProps> = ({
  count = 60,
  minSize = 3.5,
  maxSize = 6.5,
  minDuration = 5.5,
  maxDuration = 9,
  minDelay = 0,
  maxDelay = 4.5,
  minOpacity = 0.22,
  maxOpacity = 0.8,
  minBlur = 0,
  maxBlur = 0.35, // lower blur = crisper
  className = "absolute inset-0",
  zIndex = 0,
}) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map(() => {
      const size = `${rand(minSize, maxSize).toFixed(1)}px`;
      const left = `${rand(0, 100)}%`;
      const top = `${rand(0, 100)}%`;
      const duration = `${rand(minDuration, maxDuration).toFixed(1)}s`;
      const delay = `${rand(minDelay, maxDelay).toFixed(1)}s`;
      const opacity = rand(minOpacity, maxOpacity).toFixed(2);
      const blur = `${rand(minBlur, maxBlur).toFixed(1)}px`;

      // crisp glow with tighter bloom
      const glow = `0 0 ${
        Math.max(1.6, parseFloat(size) * 1.1)
      }px rgba(234,88,12,${Math.max(0.07, parseFloat(opacity) * 0.17)})`;

      return { size, left, top, duration, delay, opacity, blur, glow };
    });
  }, [
    count,
    minSize,
    maxSize,
    minDuration,
    maxDuration,
    minDelay,
    maxDelay,
    minOpacity,
    maxOpacity,
    minBlur,
    maxBlur,
  ]);

  return (
    <>
      <div className={className} aria-hidden style={{ zIndex }}>
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              opacity: p.opacity,
              filter: `blur(${p.blur})`,
              boxShadow: p.glow,
              animation: `particleRise ${p.duration} linear ${p.delay} infinite, shimmer 2.3s ease-in-out infinite`,
              background:
                "radial-gradient(circle at 45% 38%, rgba(255,210,115,1) 0%, rgba(234,88,12,0.85) 33%, rgba(234,88,12,0.28) 62%, rgba(234,88,12,0.04) 100%)",
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes particleRise {
            0%   { transform: translateY(0) scale(1); opacity: 0; }
            8%   { opacity: 0.9; transform: translateY(-6px) scale(1.04); }
            40%  { opacity: 0.45; transform: translateY(-26px) scale(1.02); }
            100% { opacity: 0; transform: translateY(-70px) scale(0.96); }
          }

          @keyframes shimmer {
            0%,100% { filter: brightness(1) }
            50%     { filter: brightness(1.25) }
          }
        `}
      </style>
    </>
  );
};

export default GoldParticles;
