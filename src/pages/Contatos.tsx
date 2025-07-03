import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';

const Contatos: React.FC = () => {
  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "5511987654321"; // Substitua pelo número correto
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="container-custom">
        {/* Cabeçalho da página */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-50 mb-4">Entre em Contato</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Estamos à disposição para atender você com excelência e exclusividade
          </p>
        </div>

        {/* Grid de informações de contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
            <Phone className="h-8 w-8 text-slate-50 mb-4" />
            <h3 className="text-xl font-medium text-slate-50 mb-2">Telefone</h3>
            <p className="text-slate-300">+55 (11) 93474-25500</p>

            <button
              onClick={() => handleWhatsAppClick("Olá! Gostaria de saber mais sobre os relógios.")}
              className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-md flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-emerald-700/30"
            >
              <MessageCircle className="h-5 w-5 flex-shrink-0" />
              <span className="font-medium">WhatsApp Direto</span>
            </button>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
            <Mail className="h-8 w-8 text-slate-50 mb-4" />
            <h3 className="text-xl font-medium text-slate-50 mb-2">E-mail</h3>
            <p className="text-slate-300">contato@orbit.com</p>
            <p className="text-slate-300">atendimento@orbit.com</p>
            <a
              href="mailto:contato@orbit.com"
              className="mt-4 w-full bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Enviar E-mail</span>
            </a>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
            <MapPin className="h-8 w-8 text-slate-50 mb-4" />
            <h3 className="text-xl font-medium text-slate-50 mb-2">Endereço</h3>
            <p className="text-slate-300">Av. Paulista, 1000</p>
            <p className="text-slate-300">São Paulo, SP - 01310-100</p>
            <a
              href="https://maps.google.com/?q=Av.+Paulista,+1000,+São+Paulo,+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-md flex items-center justify-center space-x-2 transition-colors"
            >
              <MapPin className="h-5 w-5" />
              <span>Ver no Mapa</span>
            </a>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
            <Clock className="h-8 w-8 text-slate-50 mb-4" />
            <h3 className="text-xl font-medium text-slate-50 mb-2">Horário</h3>
            <p className="text-slate-300">Segunda a Sexta: 9h às 18h</p>
            <p className="text-slate-300">Sábado: 10h às 14h</p>
            <button
              onClick={() => handleWhatsAppClick("Olá! Gostaria de agendar uma visita.")}
              className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-md flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-emerald-700/30"
            >
              <MessageCircle className="h-5 w-5 flex-shrink-0" />
              <span className="font-medium">Agendar Visita</span>
            </button>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-medium text-slate-50 mb-8">Siga-nos nas Redes Sociais</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/orbit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-slate-50 transition-colors"
            >
              <Instagram className="h-8 w-8" />
            </a>
            <a
              href="https://facebook.com/orbit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-slate-50 transition-colors"
            >
              <Facebook className="h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com/company/orbit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-slate-50 transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098371735976!2d-46.65620548502164!3d-23.564611284681765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000!5e0!3m2!1sen!2sbr!4v1656977865365!5m2!1sen!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contatos; 