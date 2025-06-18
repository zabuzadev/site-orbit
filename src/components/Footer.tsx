
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Crown } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-luxury-black text-luxury-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <Crown className="h-10 w-10 text-luxury-gold" />
                <div>
                  <span className="text-2xl font-playfair font-bold text-luxury-gold">ORBIT</span>
                  <span className="text-xl font-playfair font-light text-luxury-white">WATCH</span>
                  <div className="text-xs text-luxury-silver tracking-widest">SWISS EXCELLENCE</div>
                </div>
              </div>
              <p className="text-luxury-silver mb-8 leading-relaxed">
                Criadores de timepieces excepcionais desde 1874. Cada relógio é uma obra-prima da relojoaria suíça, projetada para transcender gerações.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-luxury-silver hover:text-luxury-gold cursor-pointer transition-colors" />
                <Facebook className="h-6 w-6 text-luxury-silver hover:text-luxury-gold cursor-pointer transition-colors" />
                <Youtube className="h-6 w-6 text-luxury-silver hover:text-luxury-gold cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Collections */}
            <div>
              <h3 className="text-xl font-playfair font-bold mb-8 text-luxury-gold">COLEÇÕES</h3>
              <ul className="space-y-4 text-luxury-silver">
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Heritage Collection</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Platinum Series</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Royal Diamond</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Sport Titanium</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Vintage Classic</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Edições Limitadas</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-playfair font-bold mb-8 text-luxury-gold">SERVIÇOS VIP</h3>
              <ul className="space-y-4 text-luxury-silver">
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Consultoria Exclusiva</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Personalização</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Manutenção Especializada</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Certificação de Autenticidade</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Seguro Premium</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Concierge 24/7</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-playfair font-bold mb-8 text-luxury-gold">ATELIER PRINCIPAL</h3>
              <div className="space-y-6 text-luxury-silver">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-luxury-gold mt-1 flex-shrink-0" />
                  <p>
                    Avenida Paulista, 1578<br />
                    Bela Vista - São Paulo, SP<br />
                    CEP: 01310-200
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-luxury-gold" />
                  <p>+55 (11) 3256-8900</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-luxury-gold" />
                  <p>concierge@luxustime.com.br</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-luxury-charcoal/50 rounded-lg border border-luxury-gold/20">
                <p className="text-sm text-luxury-silver mb-2">
                  <strong className="text-luxury-gold">Horário do Atelier:</strong>
                </p>
                <p className="text-sm text-luxury-silver">
                  Segunda a Sexta: 10h às 19h<br />
                  Sábado: 10h às 16h<br />
                  <span className="text-luxury-gold">Domingo: Apenas com agendamento</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-luxury-gold/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h4 className="text-2xl font-playfair font-bold text-luxury-white mb-4">
              Clube Exclusivo LuxusTime
            </h4>
            <p className="text-luxury-silver mb-8">
              Seja o primeiro a conhecer nossas novas coleções, eventos exclusivos e oportunidades únicas de investimento em timepieces raros.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="flex-1 px-6 py-4 rounded-lg bg-luxury-charcoal border border-luxury-gold/20 text-luxury-white placeholder-luxury-silver outline-none focus:border-luxury-gold transition-colors"
              />
              <button className="luxury-gradient text-luxury-black px-8 py-4 rounded-lg font-semibold hover-shine transition-all duration-300">
                INGRESSAR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-luxury-gold/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-luxury-silver">
              © 2024 OrbitWatch. Todos os direitos reservados. | Relojoaria Suíça de Luxo
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-luxury-silver hover:text-luxury-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-luxury-silver hover:text-luxury-gold transition-colors">
                Termos de Serviço
              </a>
              <a href="#" className="text-luxury-silver hover:text-luxury-gold transition-colors">
                Autenticidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
