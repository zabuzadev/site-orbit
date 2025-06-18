import React from 'react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 p-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">LuxusTime</h1>
          <div className="space-x-6">
            <a href="#" className="hover:text-gray-300">Coleções</a>
            <a href="#" className="hover:text-gray-300">Sobre</a>
            <a href="#" className="hover:text-gray-300">Contato</a>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-6">Bem-vindo a OrbitWatch</h2>
            <p className="text-xl text-gray-400 mb-8">
              Descubra a excelência em relojoaria de luxo
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors">
              Explorar Coleção
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
