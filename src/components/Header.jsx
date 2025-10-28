import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Layanan", path: "/services" },
    { name: "Tentang", path: "/about" },
    { name: "Kontak", path: "/contact" },
  ];

  return (
    <header className="flex justify-between items-center px-10 py-5 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-cyan-500/20">
      
      {/* Brand */}
      <div className="flex items-center space-x-3">
        <span className="text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse">
          NEXODE
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex space-x-8">
        {navItems.map(({ name, path }) => {
          const active = pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={`relative font-medium transition-all ${
                active
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-cyan-300"
              }`}
            >
              {name}

              {/* Bottom neon active indicator */}
              {active && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 rounded-full drop-shadow-[0_0_6px_#22d3ee]" />
              )}
            </Link>
          );
        })}

        {/* CTA Button (Game Mode / Order Project / etc) */}
        <Link
          to="/start"
          className="ml-6 px-5 py-2 rounded-lg bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500 hover:text-neutral-900 transition-all border border-cyan-500 shadow-[0_0_8px_#22d3ee]"
        >
          Mulai Proyek
        </Link>
      </nav>
    </header>
  );
}
