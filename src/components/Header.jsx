import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Layanan", path: "/services" },
    { name: "Tentang", path: "/about" },
    { name: "Kontak", path: "/contact" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="px-4 md:px-10 py-5 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-cyan-500/20">
      <div className="flex justify-between items-center">
        
        {/* Brand */}
        <span className="text-2xl md:text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          NEXODE
        </span>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-gray-300">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(({ name, path }) => {
            const active = pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`relative font-medium transition-all ${
                  active ? "text-cyan-400" : "text-gray-400 hover:text-cyan-300"
                }`}
              >
                {name}
                {active && <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 rounded-full"/>}
              </Link>
            );
          })}
          <Link
            to="/start"
            className="px-5 py-2 rounded-lg bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500 hover:text-neutral-900 transition-all border border-cyan-500 shadow-[0_0_8px_#22d3ee]"
          >
            Mulai Proyek
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col mt-4 space-y-5 bg-neutral-900 p-6 rounded-xl md:hidden border border-neutral-800">
          {navItems.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
              className={`text-lg ${
                pathname === path ? "text-cyan-400" : "text-gray-300"
              }`}
              onClick={closeMenu}
            >
              {name}
            </Link>
          ))}

          <Link
            to="/start"
            className="px-5 py-3 rounded-lg text-center bg-cyan-500 text-neutral-900 font-semibold"
            onClick={closeMenu}
          >
            Mulai Proyek 🚀
          </Link>
        </div>
      )}
    </header>
  );
}
