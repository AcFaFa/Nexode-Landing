import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [launchDate] = useState(() => {
    const target = new Date("2025-12-25T00:00:00"); // Launching pada 25 Desember 2025 pukul 00:00
    return target.getTime();
  });


  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-center text-gray-100 px-6">

      {/* Branding */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse-slow">
        NEXODE
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
        Solusi teknologi modern untuk mengembangkan bisnis Anda lebih cepat, efisien, dan skalabel.
      </p>

      {/* Countdown */}
      <div className="flex gap-4 mb-8">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div
            key={unit}
            className="bg-neutral-800 px-5 py-4 rounded-xl shadow-lg border border-neutral-700"
          >
            <p className="text-3xl font-bold text-cyan-400">{timeLeft[unit]}</p>
            <p className="text-xs uppercase text-gray-400 tracking-wider">{unit}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-10">
        🚀 Launching Resmi pada 25 Desember 2025
      </p>


      {/* CTA Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="https://wa.me/6281312582737"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-500 hover:bg-cyan-600 transition-all px-6 py-3 rounded-xl text-black font-semibold shadow-lg"
        >
          Konsultasi Sekarang
        </a>

        <Link
          to="/services"
          className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all px-6 py-3 rounded-xl font-semibold"
        >
          Lihat Layanan
        </Link>

        <Link
          to="/portfolio"
          className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-black transition-all px-6 py-3 rounded-xl font-semibold"
        >
          Portfolio
        </Link>
      </div>

      {/* Short Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl text-sm text-gray-300">
        <div className="bg-neutral-800 p-5 rounded-lg border border-neutral-700 hover:border-cyan-500 transition">
          🚀 Pengembangan Cepat — teknologi modern & agile process
        </div>
        <div className="bg-neutral-800 p-5 rounded-lg border border-neutral-700 hover:border-cyan-500 transition">
          🎯 Harga Kompetitif — ideal untuk Startup & UMKM
        </div>
        <div className="bg-neutral-800 p-5 rounded-lg border border-neutral-700 hover:border-cyan-500 transition">
          ⭐ Kualitas Premium — UI/UX modern & skalabel
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-16 animate-bounce text-gray-500 text-xs tracking-widest">
        Scroll ↓
      </div>

      {/* Copyright */}
      <footer className="mt-10 text-xs text-gray-600">
        © {new Date().getFullYear()} Nexode — All Rights Reserved.
      </footer>
    </section>
  );
};

export default Home;
