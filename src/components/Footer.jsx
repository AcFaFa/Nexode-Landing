import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-400 pt-12 pb-6 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 tracking-wider">
            NEXODE
          </h2>
          <p className="text-sm leading-relaxed">
            Solusi IT cepat, kualitas premium, harga kompetitif.  
            Kami bantu bisnis kamu berkembang dengan teknologi modern & efisien.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-cyan-400 transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-cyan-400 transition">Layanan</Link></li>
            <li><Link to="/portfolio" className="hover:text-cyan-400 transition">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-cyan-400 transition">Tentang</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400 transition">Kontak</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Hubungi Kami</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-cyan-400" /> achmadfauzan913@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-cyan-400" /> +62 813-1258-2737
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-4 mt-5 text-xl">
            <a href="https://www.instagram.com/nexodeofficial" aria-label="Instagram" className="hover:text-cyan-400 hover:scale-110 transition-transform">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@nexodeofficial" aria-label="TikTok" className="hover:text-cyan-400 hover:scale-110 transition-transform">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <p className="text-center text-xs mt-12 text-gray-500">
        © 2025 Nexode. Semua Hak Dilindungi.
      </p>
    </footer>
  );
}
