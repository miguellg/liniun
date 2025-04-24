import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-[#2C3654] text-gray-200 font-sans scroll-smooth">
      {/* Hero Section */}
      <motion.section
        className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-center px-4"
        style={{ backgroundImage: "url(/assets/bg-moveis.jpg)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/assets/logo-liniun.png" alt="Liniun Logo" className="w-72 mb-6 rounded-md" />
        <p className="text-xl md:text-2xl max-w-2xl bg-[#2C3654]/70 p-4 rounded-md">Móveis sob medida com estilo, precisão e personalidade.</p>
        <a href="#contato" className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow hover:bg-red-500 transition">Solicite um orçamento</a>
      </motion.section>

      {/* Sobre Nós */}
      <motion.section
        className="min-h-[600px] py-16 px-6 text-center flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">Sobre a Liniun</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300">Na Liniun, criamos móveis planejados com excelência em design e funcionalidade. Cada projeto é feito sob medida, combinando bom gosto com soluções inteligentes para todos os ambientes. Da marcenaria ao acabamento, cuidamos de cada detalhe para transformar ideias em espaços únicos.</p>
      </motion.section>

      {/* Galeria */}
      <motion.section
        className="py-16 px-6 bg-[#1E2436]"
        id="galeria"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-white mb-10">Galeria de Projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["projeto1.jpg", "projeto2.jpg", "projeto3.jpg"].map((img, i) => (
            <img key={i} src={`/assets/${img}`} alt={`Projeto ${i + 1}`} className="rounded shadow-lg object-cover w-full h-80" />
          ))}
        </div>
      </motion.section>

      {/* Depoimentos */}
      <motion.section
        className="py-16 px-6 bg-[#2C3654] text-center"
        id="depoimentos"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white mb-10">O que nossos clientes dizem</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#1E2436] p-6 rounded shadow-lg text-left">
            <p className="text-lg text-gray-300 italic">“Fiquei impressionada com a qualidade dos móveis da Liniun...”</p>
            <p className="mt-4 text-sm text-gray-400 font-semibold">— Maria Clara, São Paulo</p>
          </div>
          <div className="bg-[#1E2436] p-6 rounded shadow-lg text-left">
            <p className="text-lg text-gray-300 italic">“Atendimento impecável e resultado incrível...”</p>
            <p className="mt-4 text-sm text-gray-400 font-semibold">— Rafael Lima, Curitiba</p>
          </div>
        </div>
      </motion.section>

      {/* Contato */}
      <motion.section
        className="py-16 px-6"
        id="contato"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-white mb-4">Fale com a gente</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Seu nome" className="w-full border border-gray-600 bg-[#1E2436] text-white p-3 rounded" required />
          <input type="email" placeholder="Seu e-mail" className="w-full border border-gray-600 bg-[#1E2436] text-white p-3 rounded" required />
          <textarea placeholder="Sua mensagem ou solicitação" rows="5" className="w-full border border-gray-600 bg-[#1E2436] text-white p-3 rounded" required></textarea>
          <button type="submit" className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-500 transition">Enviar</button>
        </form>
      </motion.section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5551998304734"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg z-50"
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>

      {/* Rodapé */}
      <footer className="bg-[#1E2436] text-gray-400 text-center py-6">
        <p>&copy; 2025 Liniun Móveis Planejados. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
