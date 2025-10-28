import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-400 pt-10 pb-6 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-3 tracking-wider">
            NXODE
          </h2>
          <p className="text-sm leading-relaxed">
            Solusi IT cepat, kualitas premium, harga kompetitif.  
            Kami bantu bisnis kamu berkembang dengan teknologi modern.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400">Layanan</Link></li>
            <li><Link to="/portfolio" className="hover:text-cyan-400">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400">Tentang</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400">Kontak</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Hubungi Kami</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope /> achmadfauzan913@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +62 813-1258-2737
            </li>
          </ul>

          <div className="flex gap-4 mt-4 text-xl">
            <a href="#" className="hover:text-cyan-400" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-cyan-400" aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <p className="text-center text-xs mt-10 text-gray-500">
        © 2025 Nexode. Semua Hak Dilindungi.
      </p>
    </footer>
  );
}
