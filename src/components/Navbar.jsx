import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Trailer', href: '#media' },
    { name: 'Features', href: '#features' },
    { name: 'Community', href: '#community' },
    { name: 'Download', href: '#download' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600/20 text-violet-300 ring-1 ring-inset ring-violet-500/30">
              <Rocket size={20} />
            </span>
            <span className="font-semibold tracking-wide text-white">Axion</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-zinc-300 transition-colors hover:text-white">
                {item.name}
              </a>
            ))}
            <a
              href="#download"
              className="inline-flex items-center rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-violet-500"
            >
              Play Free
            </a>
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:bg-white/10 hover:text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/80 backdrop-blur md:hidden">
          <div className="space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-zinc-200 hover:bg-white/10"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-violet-500"
            >
              Play Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
