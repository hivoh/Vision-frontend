import React, { useMemo } from "react";
import { Link, useRouteError } from "react-router-dom";

interface RouteError {
  status?: number;
  data?: {
    message?: string;
  };
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouteError;

  const status = error?.status || 404;
  const titleMap: Record<number, string> = {
    404: "Page Not Found",
    500: "Internal Server Error",
    403: "Access Denied",
  };
  const title = titleMap[status] || "Unexpected Error";

  const messageMap: Record<number, string> = {
    404: "The page you’re looking for doesn’t exist or has been moved.",
    500: "Something went wrong on our servers. Please try again later.",
    403: "You don’t have permission to view this page.",
  };
  const message = messageMap[status] || "An unexpected error occurred.";

  // Gold dust particles (medium density)
  const PARTICLE_COUNT = 150;
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }).map(() => {
      return {
        left: Math.random() * 100,
        top: 10 + Math.random() * 80,
        size: 2.5 + Math.random() * 4,
        duration: 5 + Math.random() * 6,
        delay: Math.random() * 4,
        opacity: 0.12 + Math.random() * 40.5,
        blur: 0,
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-dark-gray1 text-dark-gray6 px-4 relative overflow-hidden">
      {/* Gold Aura background (subtle) */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-1/3 pointer-events-none rounded-full"
        style={{
          width: 520,
          height: 520,
          filter: "blur(110px)",
          background:
            "radial-gradient(circle, rgba(234,88,12,0.14), rgba(234,88,12,0.06) 30%, transparent 55%)",
          zIndex: 0,
        }}
        aria-hidden
      />

      {/* Gold dust particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background:
                "radial-gradient(circle, rgba(234,88,12,0.95) 0%, rgba(234,88,12,0.45) 40%, rgba(234,88,12,0.08) 100%)",
              opacity: p.opacity,
              filter: `blur(${p.blur}px)`,
              animation: `errorParticle ${p.duration}s linear ${p.delay}s infinite`,
              zIndex: 0,
            }}
          />
        ))}
      </div>

      <div style={{ zIndex: 10 }}>
        <h1 className="text-[90px] font-bold text-white leading-none">{status}</h1>
        <h2 className="text-2xl font-semibold text-white mt-2">{title}</h2>
        <p className="text-gray-400 mt-3 max-w-md mx-auto">{message}</p>

        {error?.data?.message && (
          <p className="text-sm text-gray-500 mt-3">{error.data.message}</p>
        )}
      </div>

      <Link
        to="/"
        className="mt-10 inline-block px-6 py-3 text-sm font-medium text-white bg-orange-600 hover:bg-orange-500 transition rounded"
        style={{ zIndex: 10 }}
      >
        Go to Home
      </Link>

      {/* Scoped keyframes only for particles (kept local and minimal) */}
      <style>
        {`
          @keyframes errorParticle {
            0% { transform: translateX(0) scale(1); opacity: 0; }
            6% { opacity: 0.7; }
            50% { transform: translateX(28px) scale(1.02); opacity: 0.35; }
            100% { transform: translateX(68px) scale(0.9); opacity: 0; }
          }

          /* responsive tweak so large status doesn't overflow small screens */
          @media (max-width: 420px) {
            .text-[90px] { font-size: 56px; }
          }
        `}
      </style>
    </div>
  );
};

export default ErrorPage;
