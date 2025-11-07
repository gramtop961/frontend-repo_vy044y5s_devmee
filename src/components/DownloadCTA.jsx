import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section id="download" className="relative bg-[#08050f] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Ready to enter the arena?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-zinc-300"
        >
          Get the Axion playtest build for PC. Controller and keyboard supported.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex items-center justify-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-600/30 ring-1 ring-violet-500/30 transition hover:-translate-y-0.5 hover:bg-violet-500"
          >
            <Download className="h-5 w-5" /> Download for PC
          </a>
        </motion.div>
      </div>
    </section>
  );
}
