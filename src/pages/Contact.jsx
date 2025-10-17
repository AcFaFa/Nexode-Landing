export default function Contact() {
  return (
    <section className="text-center py-20 bg-neutral-900 min-h-[80vh]">
      <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
      <p className="max-w-lg mx-auto text-gray-400 mb-8">
        Ingin berdiskusi tentang proyek Anda? Kami siap membantu Anda mewujudkannya.
      </p>
      <div className="space-x-4">
        <a
          href="mailto:contact@nexode.tech"
          className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold rounded-xl hover:bg-cyan-300 transition"
        >
          Email Kami
        </a>
        <a
          href="https://wa.me/6281234567890"
          className="inline-block px-6 py-3 bg-cyan-400 text-black font-semibold rounded-xl hover:bg-cyan-300 transition"
        >
          Chat di WhatsApp
        </a>
      </div>
    </section>
  );
}
