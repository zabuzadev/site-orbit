import React from 'react';
import { Crown, Shield, Star, Users, Gift, Watch, MessageCircle, Calendar } from 'lucide-react';
import CommunitySection from '../components/CommunitySection';

const GrupoExclusivo: React.FC = () => {
  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = "5511987654321"; // Substitua pelo número correto
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="pt-24 pb-16">
        <div className="container-custom">
          {/* Cabeçalho da página */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Crown className="h-16 w-16 text-slate-50 luxury-shine" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-50 mb-4">Grupo Exclusivo</h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Faça parte do nosso círculo mais seleto de clientes e desfrute de benefícios únicos
            </p>
          </div>

          {/* Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <Shield className="h-10 w-10 text-slate-50 mb-6" />
              <h3 className="text-xl font-medium text-slate-50 mb-3">Acesso Prioritário</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Seja o primeiro a conhecer e adquirir nossas novas coleções e peças exclusivas
              </p>
              <button
                onClick={() => handleWhatsAppClick("Olá! Gostaria de saber mais sobre o acesso prioritário às coleções exclusivas.")}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-md flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-emerald-700/30"
              >
                <MessageCircle className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium">Saiba Mais</span>
              </button>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <Star className="h-10 w-10 text-slate-50 mb-6" />
              <h3 className="text-xl font-medium text-slate-50 mb-3">Eventos VIP</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Convites para eventos exclusivos, lançamentos e experiências únicas no mundo da alta relojoaria
              </p>
              <button
                onClick={() => handleWhatsAppClick("Olá! Gostaria de saber mais sobre os eventos VIP.")}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-md flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-emerald-700/30"
              >
                <Calendar className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium">Próximos Eventos</span>
              </button>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700/50 hover:border-slate-600 transition-colors">
              <Users className="h-10 w-10 text-slate-50 mb-6" />
              <h3 className="text-xl font-medium text-slate-50 mb-3">Atendimento Dedicado</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Consultor pessoal disponível 24/7 para atender todas as suas necessidades
              </p>
              <button
                onClick={() => handleWhatsAppClick("Olá! Gostaria de falar com um consultor pessoal.")}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-md flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-emerald-700/30"
              >
                <MessageCircle className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium">Falar com Consultor</span>
              </button>
            </div>
          </div>

          {/* Seção de Destaque */}
          <div className="bg-slate-800/30 rounded-lg p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-slate-50 mb-4">Coleção Exclusiva</h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Como membro do nosso grupo exclusivo, você terá acesso a peças únicas e edições limitadas que não estão disponíveis ao público em geral.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-slate-300">
                    <Watch className="h-5 w-5 mr-3 text-slate-50" />
                    Peças numeradas e certificadas
                  </li>
                  <li className="flex items-center text-slate-300">
                    <Shield className="h-5 w-5 mr-3 text-slate-50" />
                    Garantia estendida exclusiva
                  </li>
                  <li className="flex items-center text-slate-300">
                    <Gift className="h-5 w-5 mr-3 text-slate-50" />
                    Embalagem premium personalizada
                  </li>
                </ul>
                <button
                  onClick={() => handleWhatsAppClick("Olá! Gostaria de conhecer a coleção exclusiva.")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-md font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center space-x-3 shadow-lg hover:shadow-emerald-700/30"
                >
                  <MessageCircle className="h-5 w-5 flex-shrink-0" />
                  <span>Solicitar Apresentação Privada</span>
                </button>
              </div>
              <div className="relative">
                <div className="rounded-lg overflow-hidden h-[400px]">
                  <img
                  src="/oferta grupo 3.jpg"
                  alt="Relógio Exclusivo"
                  className="w-full h-full object-cover object-top bg-slate-800"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.backgroundColor = '#1e293b';
                    target.src = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" viewBox%3D"0 0 1 1"%3E%3C%2Fsvg%3E';
                  }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-slate-900 p-4 rounded-lg border border-slate-700">
                  <Crown className="h-8 w-8 text-slate-50" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center">
            <h2 className="text-2xl font-medium text-slate-50 mb-4">Interessado em fazer parte?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco agora mesmo e descubra como fazer parte deste grupo seleto de apreciadores da alta relojoaria.
            </p>
            <button
              onClick={() => handleWhatsAppClick("Olá! Gostaria de fazer parte do grupo exclusivo.")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-8 rounded-md font-medium inline-flex items-center space-x-3 transition-all duration-300 shadow-lg hover:shadow-emerald-700/30 text-lg"
            >
              <MessageCircle className="h-6 w-6 flex-shrink-0" />
              <span>Iniciar Conversa no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Community Section */}
      <CommunitySection />
    </div>
  );
};

export default GrupoExclusivo; 