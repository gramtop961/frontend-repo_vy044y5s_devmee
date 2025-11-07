import { motion } from 'framer-motion';
import { Rocket, Zap, Shield, Gauge } from 'lucide-react';

const features = [
  {
    icon: <Rocket className="h-6 w-6 text-violet-400" />,
    title: 'Aerial Combat',
    desc: 'Tight physics, responsive controls, and acrobatic maneuvers built for competitive play.'
  },
  {
    icon: <Zap className="h-6 w-6 text-violet-400" />,
    title: 'Neon Arenas',
    desc: 'Race and duel across procedurally lit arenas with dynamic hazards and power lines.'
  },
  {
    icon: <Shield className="h-6 w-6 text-violet-400" />,
    title: 'Squad Tactics',
    desc: 'Form squads, coordinate attacks, and deploy EMPs, shields, and decoys in real time.'
  },
  {
    icon: <Gauge className="h-6 w-6 text-violet-400" />,
    title: 'Performance First',
    desc: 'Optimized rendering and netcode for ultra-low latency and silky smooth motion.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#0a0613] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Built for Speed. Forged for Skill.
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/[0.08]"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-violet-600/15 p-3 ring-1 ring-violet-500/30">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
