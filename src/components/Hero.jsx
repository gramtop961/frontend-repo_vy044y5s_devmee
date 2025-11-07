import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#07030d]" id="#">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-white to-zinc-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          Axion
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-zinc-300"
        >
          Pilot high-velocity drones through neon arenas. Master the skies, outmaneuver rivals, and own the grid.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#download"
            className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-violet-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-violet-600/30 ring-1 ring-violet-500/30 transition hover:-translate-y-0.5 hover:bg-violet-500"
          >
            Play Free
          </a>
          <a
            href="#features"
            className="pointer-events-auto inline-flex items-center justify-center rounded-md bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-inset ring-white/20 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07030d] to-transparent" />
    </section>
  );
}
