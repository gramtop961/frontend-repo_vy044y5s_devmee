import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Gamepad2, Monitor, Playstation, Xbox } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#06030b]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jQwvQSncGp8maF9S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft neon vignette that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 backdrop-blur"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-violet-400 animate-pulse" /> Public Playtest
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-4 bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          AXION
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-zinc-300"
        >
          High-velocity drone combat in neon arenas. Boost, drift, and outplay in a fight for the grid.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#media"
            className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-violet-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-600/30 ring-1 ring-violet-500/30 transition hover:-translate-y-0.5 hover:bg-violet-500"
          >
            Watch Trailer
          </a>
          <a
            href="#features"
            className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-inset ring-white/20 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
          >
            Discover Features
          </a>
        </motion.div>

        {/* Platform badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 grid grid-cols-3 gap-3 text-xs text-zinc-300"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2"><Monitor className="h-4 w-4 text-violet-300" /> PC</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2"><Xbox className="h-4 w-4 text-violet-300" /> Xbox</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2"><Playstation className="h-4 w-4 text-violet-300" /> PlayStation</span>
        </motion.div>

        {/* Input hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 inline-flex items-center gap-2 text-xs text-zinc-400"
        >
          <Gamepad2 className="h-4 w-4" /> Controller and keyboard supported
        </motion.div>
      </div>

      {/* Ground gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06030b] to-transparent" />
    </section>
  );
}
