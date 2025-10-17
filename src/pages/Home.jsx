import React, { useState, useEffect } from "react";

const Home = () => {
  const launchDate = new Date("2025-12-27T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-center text-gray-100 px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        Nexode
      </h1>
      <p className="text-lg md:text-xl mb-8 text-gray-400">
        Kami sedang menyiapkan sesuatu yang besar untuk dunia digital.
      </p>

      <div className="flex gap-4 mb-8">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div key={unit} className="bg-gray-800 px-4 py-3 rounded-xl shadow-md">
            <p className="text-3xl font-bold text-cyan-400">{timeLeft[unit]}</p>
            <p className="text-xs uppercase text-gray-400">{unit}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-gray-400 mb-6">
        🚀 Launching in December 2025
      </p>

      <a
        href="https://wa.me/6281312582737"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cyan-500 hover:bg-cyan-600 transition-all px-6 py-3 rounded-xl text-black font-semibold shadow-lg"
      >
        Hubungi Kami
      </a>

      <footer className="mt-16 text-xs text-gray-600">
        © {new Date().getFullYear()} Nexode. All rights reserved.
      </footer>
    </section>
  );
};

export default Home;
