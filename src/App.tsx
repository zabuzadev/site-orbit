import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoShowcase from './components/VideoShowcase';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Footer from './components/Footer';
import WatchesPage from './pages/Watches';
import Contatos from './pages/Contatos';
import GrupoExclusivo from './pages/GrupoExclusivo';
import Comunidade from './pages/Comunidade';
import NotFound from './pages/NotFound';
import WhatsAppButton from './components/WhatsAppButton';

// Componente para a página inicial
const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoShowcase />
        <ProductGrid />
        <About />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

// Layout padrão para páginas com header e footer
const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/relogios" element={
          <DefaultLayout>
            <WatchesPage />
          </DefaultLayout>
        } />
        <Route path="/contatos" element={
          <DefaultLayout>
            <Contatos />
          </DefaultLayout>
        } />
        <Route path="/grupo-exclusivo" element={
          <DefaultLayout>
            <GrupoExclusivo />
          </DefaultLayout>
        } />
        <Route path="/comunidade" element={
          <DefaultLayout>
            <Comunidade />
          </DefaultLayout>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
