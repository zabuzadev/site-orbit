import { Shield, Award, Box, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const CommunitySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      image: "/oferta grupo 2.jpg",
      alt: "Print 1 do WhatsApp"
    },
    {
      image: "/oferta grupo 3.jpg",
      alt: "Print 2 do WhatsApp"
    },
   
    {
      image: "/oferta grupo 4.jpg", 
      alt: "Print 4 do WhatsApp"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const benefits = [
    {
      icon: Shield,
      title: "Compra Garantida",
      description: "Compra garantida com todos os produtos testados antes do envio além de ter passado por uma revisão antes da venda!"
    },
    {
      icon: Award,
      title: "Produtos 100% Originais",
      description: "Produtos 100% originais com certificado de compra, usados e alguns com garantia de fábrica!"
    },
    {
      icon: Box,
      title: "Entrega Segura",
      description: "Trabalhamos com transportadoras e motoristas de entrega a depender da região da compra."
    }
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="container mx-auto px-4">
        {/* Título Principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ENTRE NA NOSSA COMUNIDADE<br />
            EXCLUSIVA DE RELÓGIOS
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Nossa comunidade totalmente voltada para ofertas exclusivas na compra
            de relógios de luxo. Ideal para quem quer trocar sua máquina!
          </p>
          <p className="text-slate-300 text-lg mt-2">
            Clique no botão e entre na comunidade!
          </p>
        </div>

        {/* Seção de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-slate-800/50 rounded-lg">
                  <benefit.icon className="h-8 w-8 text-slate-100" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-100 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Botão CTA */}
        <div className="text-center">
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = 'https://wa.me/5511934567890'}
          >
            Participar da Comunidade
          </Button>
        </div>

        {/* Vitrine do Relógio */}
        <div className="mt-24 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-2xl tracking-widest circular-text">
                <style >{`
                  @keyframes rotate {
                    from {
                      transform: rotate(0deg);
                    }
                    to {
                      transform: rotate(360deg);
                    }
                  }
                  .circular-text {
                    position: absolute;
                    width: 300px;
                    height: 300px;
                    animation: rotate 20s linear infinite;
                  }
                  .circular-text span {
                    position: absolute;
                    left: 50%;
                    font-size: 1.2rem;
                    transform-origin: 0 150px;
                  }
                `}</style>
                {"ORBIT • RELÓGIOS • LUXO • ".split("").map((char, i) => (
                  <span
                    key={i}
                    style={{
                      transform: `rotate(${i * 8.6}deg)`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
            <img 
              src="/IMG_1822.AVIF" 
              alt="Vitrine de Relógios de Luxo" 
              className="w-64 h-64 object-contain relative z-10"
            />
          </div>
          <p className="text-white text-xl mt-8 max-w-2xl mx-auto">
            A oportunidade perfeita para você investir e encontrar
            o relógio ideal! Junte-se a nós hoje e tenha acesso a
            vantagens exclusivas.
          </p>
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full font-medium mt-8 transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = 'https://wa.me/5511934567890'}
          >
            Participar da Comunidade
          </Button>
        </div>

        {/* WhatsApp Testimonials */}
        <div className="mt-24 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Veja o que nossos clientes dizem
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-2xl bg-slate-800">
              <div className="relative">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 aspect-[3/4] relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-4 text-center">
              <p className="text-slate-400 text-sm">
                Para adicionar os prints do WhatsApp:
              </p>
              <ol className="text-slate-400 text-sm list-decimal list-inside mt-2">
                <li>Salve seus prints com os nomes: whatsapp-1.png, whatsapp-2.png, whatsapp-3.png</li>
                <li>Coloque os arquivos na pasta &quot;public&quot; do projeto</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            A oportunidade perfeita para você investir e encontrar
            o relógio ideal! Junte-se a nós hoje e tenha acesso a
            vantagens exclusivas.
          </p>
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full font-medium transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = 'https://wa.me/5511934567890'}
          >
            Participar da Comunidade
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection; 