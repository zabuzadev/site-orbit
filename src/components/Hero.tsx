
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock, Award, Gem } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Coleção Heritage",
      subtitle: "150 Anos de Excelência Suíça",
      description: "Descubra timepieces que transcendem gerações, criados com a precisão e elegância que definem a alta relojoaria.",
      image: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      cta: "EXPLORAR COLEÇÃO"
    },
    {
      id: 2,
      title: "Edição Limitada Platinum",
      subtitle: "Apenas 50 Peças no Mundo",
      description: "Uma obra-prima exclusiva que combina materiais preciosos com movimento manufaturado próprio.",
      image: "/ORBIT (2).png", // Updated to use public folder path
      cta: "RESERVAR AGORA"
    },
    {
      id: 3,
      title: "Maestria Artesanal",
      subtitle: "Cada Detalhe é uma Obra de Arte",
      description: "Nossos mestres relojoeiros dedicam meses para criar cada timepiece, garantindo perfeição absoluta.",
      image: "/ORBIT (3).png", // Updated to use public folder path
      cta: "CONHEÇA O PROCESSO"
    }
    ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Carousel */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0">
              <img 
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/60"></div>
            </div>
            
            <div className="relative h-full flex items-center">
              <div className="container-custom">
                <div className="max-w-4xl">
                  <div className="animate-fade-in-up">
                    <div className="inline-flex items-center space-x-2 bg-slate-50/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                      <Clock className="h-4 w-4 text-slate-50" />
                      <span className="text-slate-50 font-medium text-sm tracking-wide">ORBIT WATCH</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-slate-50 mb-4 sm:mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-light text-slate-200 mb-6 sm:mb-8">
                      {slide.subtitle}
                    </h2>
                    
                    <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      <Button 
                        size="lg"
                        className="bg-slate-50 text-slate-900 hover:bg-slate-200 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold tracking-wide"
                      >
                        {slide.cta}
                      </Button>
                      <Button 
                        variant="outline"
                        size="lg"
                        className="border-2 border-slate-50 text-slate-50 hover:bg-slate-50 hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold tracking-wide bg-transparent"
                      >
                        AGENDAR VISITA
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 bg-slate-50/10 hover:bg-slate-50/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-colors z-10"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-slate-50" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 bg-slate-50/10 hover:bg-slate-50/20 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-colors z-10"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-slate-50" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-slate-50" : "bg-slate-50/40"
            }`}
          />
        ))}
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-slate-800/80 backdrop-blur-sm border-t border-slate-700/50">
        <div className="container-custom">
          <div className="grid grid-cols-3 divide-x divide-slate-700/50">
            <div className="py-4 sm:py-6 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-slate-50" />
                <div>
                  <div className="text-lg sm:text-xl font-bold text-slate-50">150+</div>
                  <div className="text-xs sm:text-sm text-slate-300">Anos de Tradição</div>
                </div>
              </div>
            </div>
            <div className="py-4 sm:py-6 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                <Gem className="h-4 w-4 sm:h-5 sm:w-5 text-slate-50" />
                <div>
                  <div className="text-lg sm:text-xl font-bold text-slate-50">50K+</div>
                  <div className="text-xs sm:text-sm text-slate-300">Clientes Exclusivos</div>
                </div>
              </div>
            </div>
            <div className="py-4 sm:py-6 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-slate-50" />
                <div>
                  <div className="text-lg sm:text-xl font-bold text-slate-50">24/7</div>
                  <div className="text-xs sm:text-sm text-slate-300">Concierge Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
