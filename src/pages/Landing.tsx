import { Link } from "react-router-dom";
import { VenetianMask, Eye, MapPin, Bell, Play } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Landing.tsx
 * - Particles in all sections now use the same gold-dust style + rise animation
 * - No text or size changes; only visual/animation updates to particles
 */

const features = [
  {
    icon: <Eye className="w-8 h-8 text-primary-orange" />,
    title: "Real-Time Detection",
    description:
      "AI-powered human detection with instant event processing for rapid decision-making."
  },
  {
    icon: <MapPin className="w-8 h-8 text-primary-orange" />,
    title: "Smart Geofencing",
    description:
      "Define virtual zones and receive alerts when boundaries are crossed."
  },
  {
    icon: <Bell className="w-8 h-8 text-primary-orange" />,
    title: "Instant Alerts",
    description:
      "Instant notifications via email and dashboard for immediate response."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 }
  })
};

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const Landing = () => {
  return (
    <div className="bg-dark-gray1 text-dark-gray6 min-h-screen overflow-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-20 bg-dark-gray1/80 backdrop-blur-md border-b border-dark-gray2">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <VenetianMask className="w-12 h-12 text-primary-orange" />
            <span className="text-xl font-semibold tracking-wide">Vision</span>
          </div>

          <nav className="hidden md:flex space-x-10 text-sm font-medium">
            <a href="#features" className="hover:text-primary-orange transition">Features</a>
            <a href="#demo" className="hover:text-primary-orange transition">Demo</a>
            <a href="#contact" className="hover:text-primary-orange transition">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="hover:text-primary-orange text-sm transition">Login</Link>
            <Link
              to="/signup"
              className="bg-primary-orange text-dark-gray6 px-5 py-2 rounded-md text-sm font-semibold hover:bg-primary-orange/90 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

        {/* Gold Aura */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] bg-primary-orange/30 blur-[120px] rounded-full top-1/3 left-1/2 -translate-x-1/2" />
        </div>

        {/* Gold Dust Particles (Hero - dense, fire-like rise) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          {[...Array(80)].map((_, i) => {
            const size = `${rand(2, 6)}px`;
            const left = `${rand(0, 100)}%`;
            const top = `${rand(0, 100)}%`;
            const duration = `${rand(6, 11)}s`;
            const delay = `${rand(0, 6)}s`;
            const opacity = rand(0.18, 0.7);
            const blur = `${rand(0.3, 1.6)}px`;
            return (
              <span
                key={i}
                style={{
                  left,
                  top,
                  width: size,
                  height: size,
                  background:
                    "radial-gradient(circle, rgba(234,88,12,0.95) 0%, rgba(234,88,12,0.45) 40%, rgba(234,88,12,0.08) 100%)",
                  opacity,
                  filter: `blur(${blur})`,
                  animation: `particleRise ${duration} linear ${delay} infinite`,
                  borderRadius: "9999px",
                }}
                className="absolute"
              />
            );
          })}
        </div>

        <div className="relative z-10 text-center max-w-3xl pt-24">
          <h1 className="text-5xl md:text-6xl font-bold opacity-0 animate-[slideUp_0.8s_ease-out_forwards]">
            Intelligent Surveillance
          </h1>

          {/* Spark Underline */}
          <div className="relative inline-block mt-2 mb-6 opacity-0 animate-[slideUp_1s_ease-out_forwards]">
            <span className="text-primary-orange text-5xl md:text-6xl font-bold">
              Reimagined
            </span>
            <span className="absolute left-0 bottom-1 w-full h-[3px] bg-primary-orange/60 rounded-full animate-[spark_2s_ease-in-out_infinite]" />
          </div>

          <p className="text-dark-gray4 text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-0 animate-[slideUp_1.2s_ease-out_forwards]">
            A modern AI-driven security system delivering real-time human detection, 
            geofencing, and instant alerts with exceptional reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[slideUp_1.4s_ease-out_forwards]">
            <Link
              to="/signup"
              className="bg-primary-orange text-dark-gray6 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-orange/90 transition"
            >
              Get Started
            </Link>
            <Link
              to="/demo"
              className="border border-primary-orange text-primary-orange px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary-orange hover:text-dark-gray1 transition"
            >
              Live Demo
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-28 bg-dark-gray2 relative overflow-hidden">

        {/* Gold Dust Particles (sparser, same style as hero) */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {[...Array(40)].map((_, i) => {
            const size = `${rand(1.5, 4)}px`;
            const left = `${rand(0, 100)}%`;
            const top = `${rand(0, 100)}%`;
            const duration = `${rand(6, 12)}s`;
            const delay = `${rand(0, 6)}s`;
            const opacity = rand(0.12, 0.45);
            const blur = `${rand(0.2, 1.2)}px`;
            return (
              <span
                key={i}
                style={{
                  left,
                  top,
                  width: size,
                  height: size,
                  background:
                    "radial-gradient(circle, rgba(234,88,12,0.95) 0%, rgba(234,88,12,0.45) 40%, rgba(234,88,12,0.08) 100%)",
                  opacity,
                  filter: `blur(${blur})`,
                  animation: `particleRise ${duration} linear ${delay} infinite`,
                  borderRadius: "9999px",
                }}
                className="absolute"
              />
            );
          })}
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-dark-gray6">Key Features</h2>
          <p className="text-dark-gray4 max-w-2xl mx-auto mb-16">
            Experience precision, speed, and intelligent surveillance — engineered for modern security.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="relative bg-dark-gray1/80 border border-dark-gray2 rounded-xl p-10 text-left
                hover:border-primary-orange/60 hover:shadow-[0_0_25px_rgba(234,88,12,0.35)]
                transition duration-300 group"
              >
                <div className="mb-6 group-hover:scale-110 transition">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-dark-gray6">{feature.title}</h3>
                <p className="text-dark-gray4">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="py-28 bg-dark-gray1 relative overflow-hidden">

        {/* Gold Dust Particles (demo - sparser) */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {[...Array(200)].map((_, i) => {
            const size = `${rand(1.2, 8)}px`;
            const left = `${rand(0, 100)}%`;
            const top = `${rand(0, 100)}%`;
            const duration = `${rand(6, 12)}s`;
            const delay = `${rand(0, 6)}s`;
            const opacity = rand(0.11, 0.4);
            const blur = `${rand(0.2, 1.1)}px`;
            return (
              <span
                key={i}
                style={{
                  left,
                  top,
                  width: size,
                  height: size,
                  background:
                    "radial-gradient(circle, rgba(234,88,12,0.95) 0%, rgba(234,88,12,0.45) 40%, rgba(234,88,12,0.08) 100%)",
                  opacity,
                  filter: `blur(${blur})`,
                  animation: `particleRise ${duration} linear ${delay} infinite`,
                  borderRadius: "9999px",
                }}
                className="absolute"
              />
            );
          })}
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-dark-gray6">Interactive Dashboard</h2>
          <p className="text-dark-gray4 max-w-2xl mx-auto mb-12">
            A streamlined command center to monitor, control, and respond in real-time.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-dark-gray2 rounded-2xl p-8 border border-dark-gray3 max-w-5xl mx-auto relative overflow-hidden group"
          >
            {/* subtle shine sweep on hover (keeps gradient look subtle) */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="opacity-0 group-hover:opacity-60 transition duration-700 absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl" />
            </div>

            <div className="aspect-video bg-dark-gray1 rounded-lg flex items-center justify-center border border-dark-gray2">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                  <Play className="w-8 h-8 text-dark-gray6" />
                </div>
                <p className="text-dark-gray4">View Dashboard Preview</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-transparent relative overflow-hidden">

        {/* Gold Dust Particles (CTA - very sparse) */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          {[...Array(50)].map((_, i) => {
            const size = `${rand(1.2, 8)}px`;
            const left = `${rand(0, 100)}%`;
            const top = `${rand(0, 100)}%`;
            const duration = `${rand(6, 12)}s`;
            const delay = `${rand(0, 6)}s`;
            const opacity = rand(0.1, 0.35);
            const blur = `${rand(0.2, 1)}px`;
            return (
              <span
                key={i}
                style={{
                  left,
                  top,
                  width: size,
                  height: size,
                  background:
                    "radial-gradient(circle, rgba(234,88,12,0.95) 0%, rgba(234,88,12,0.45) 40%, rgba(234,88,12,0.08) 100%)",
                  opacity,
                  filter: `blur(${blur})`,
                  animation: `particleRise ${duration} linear ${delay} infinite`,
                  borderRadius: "9999px",
                }}
                className="absolute"
              />
            );
          })}
        </div>

        <div className="max-w-9xl mx-auto px-6">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-full md:w-2/5 bg-gradient-to-b from-[rgba(234,88,12,0.09)] to-[rgba(234,88,12,0.04)] border border-[rgba(234,88,12,0.08)] rounded-2xl p-8 text-center relative shadow-[0_20px_60px_rgba(234,88,12,0.06)] hover:shadow-[0_20px_90px_rgba(234,88,12,0.15)] transition">
              <h3 className="text-2xl font-semibold text-dark-gray6 mb-3">Ready to Secure Your Premises?</h3>
              <p className="text-dark-gray4 mb-6">Start a free trial or schedule a custom demo for your team.</p>

              <div className="flex items-center justify-center gap-4">
                <Link to="/signup" className="bg-primary-orange text-dark-gray6 px-6 py-3 rounded-md font-semibold hover:bg-primary-orange/90 transition">Get Started</Link>
                <Link to="/demo" className="px-4 py-2 rounded-md border border-dark-gray3 text-dark-gray4 hover:text-primary-orange transition">Request Demo</Link>
              </div>

              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[420px] h-[90px] rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(234,88,12,0.12), transparent 40%)", pointerEvents: "none" }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark-gray2 border-t border-dark-gray3 py-5" id="contact">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <VenetianMask className="w-6 h-6 text-primary-orange" />
            <span className="text-lg font-semibold text-dark-gray6">Vision</span>
          </div>
          <div className="text-dark-gray4 text-sm">
            © {new Date().getFullYear()} Vision. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Animations */}
      <style>
        {`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes spark {
          0% { transform: scaleX(0); opacity: 0.4; }
          50% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(0); opacity: 0.4; }
        }

        /* unified particle rise animation for consistent gold-dust feel */
        @keyframes particleRise {
          0% { transform: translateY(0px) scale(1); opacity: 0; }
          8% { opacity: 0.7; }
          45% { transform: translateY(-28px) scale(1.02); opacity: 0.35; }
          100% { transform: translateY(-68px) scale(0.9); opacity: 0; }
        }
        `}
      </style>
    </div>
  );
};

export default Landing;
