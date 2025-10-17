import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-5 bg-neutral-900 sticky top-0 z-50">
      <div className="text-2xl font-bold text-cyan-400">Nexode</div>
      <nav className="space-x-6">
        <Link to="/" className="hover:text-cyan-400">Home</Link>
        <Link to="/services" className="hover:text-cyan-400">Layanan</Link>
        <Link to="/about" className="hover:text-cyan-400">Tentang</Link>
        <Link to="/contact" className="hover:text-cyan-400">Kontak</Link>
      </nav>
    </header>
  );
}
