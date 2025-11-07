import { motion } from 'framer-motion';
import { Crosshair, RadioTower, Bolt, Trophy } from 'lucide-react';

const features = [
  {
    icon: <Crosshair className="h-6 w-6 text-violet-400" />,
    title: 'Precision Flight',
    tag: 'Core Gameplay',
    desc: 'Tight air control with drift, boost, and slide. Snap turns and responsive thrusters reward skill.'
  },
  {
    icon: <RadioTower className="h-6 w-6 text-violet-400" />,
    title: 'Dynamic Arenas',
    tag: 'Maps',
    desc: 'Reactive geometry, energy gates, moving hazards, and lines that amplify speed and damage.'
  },
  {
    icon: <Bolt className="h-6 w-6 text-violet-400" />,
    title: 'Loadouts & Abilities',
    tag: 'Meta',
    desc: 'EMP bursts, phase shift, shield dome, decoy drones. Swap modules to fit your playstyle.'
  },
  {
    icon: <Trophy className="h-6 w-6 text-violet-400" />,
    title: 'Ranked & Leaderboards',
    tag: 'Competitive',
    desc: 'Seasonal ladders, time trials, squad skirmishes. Climb tiers and earn exclusive skins.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-[#07040f] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Dominate the Grid
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur"
            >
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="inline-flex items-center justify-center rounded-lg bg-violet-600/15 p-3 ring-1 ring-violet-500/30">
                  {f.icon}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">
                  {f.tag}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{f.desc}</p>

              {/* Glow on hover */}
              <div className="pointer-events-none absolute -inset-px opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(139,92,246,0.15), transparent 40%)' }} />
            </motion.div>
          ))}
        </div>

        {/* Mode preview tiles */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {['Arena Control', 'Grid Rush', 'Time Trial'].map((mode, i) => (
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-violet-700/30 via-fuchsia-500/20 to-sky-500/20 ring-1 ring-inset ring-white/10" />
              <div className="mt-4 flex items-center justify-between">
                <h4 className="text-white font-semibold">{mode}</h4>
                <span className="text-xs text-zinc-400">Multiplayer</span>
              </div>
              <p className="mt-1 text-sm text-zinc-300">Queue solo or squad. Earn MMR, unlock cosmetics, and chase seasonal rewards.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
