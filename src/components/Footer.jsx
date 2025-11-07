export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} Axion. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#community" className="text-zinc-300 hover:text-white">Community</a>
            <a href="#features" className="text-zinc-300 hover:text-white">Features</a>
            <a href="#download" className="text-zinc-300 hover:text-white">Download</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
