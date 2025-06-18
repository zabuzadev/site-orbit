
import { Shield, Award, Gem, Users, Globe, Clock, Crown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "150+ Anos",
      description: "De tradição suíça"
    },
    {
      icon: Crown,
      title: "2.5K+",
      description: "Peças exclusivas"
    },
    {
      icon: Users,
      title: "50K+",
      description: "Clientes satisfeitos"
    },
    {
      icon: Globe,
      title: "80+",
      description: "Países atendidos"
    }
  ];

  const values = [
    {
      icon: Gem,
      title: "Artesanato Excepcional",
      description: "Cada relógio é uma obra de arte criada por mestres relojoeiros suíços com décadas de experiência."
    },
    {
      icon: Shield,
      title: "Qualidade Garantida",
      description: "Garantia vitalícia e serviço técnico especializado em qualquer lugar do mundo."
    },
    {
      icon: Clock,
      title: "Precisão Absoluta",
      description: "Movimentos certificados cronômetro que garantem precisão de -4/+6 segundos por dia."
    },
    {
      icon: Star,
      title: "Exclusividade",
      description: "Edições limitadas e peças únicas que fazem de você parte de um grupo seleto."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 rounded-full px-4 py-2 mb-6">
            <Crown className="h-4 w-4 text-amber-400" />
            <span className="text-amber-400 font-medium text-sm tracking-wide">SOBRE A ORBIT</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-slate-50 mb-6">
            Tradição e <span className="text-gradient">Inovação</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Desde 1874, a Orbit representa o auge da relojoaria suíça. Combinamos técnicas tradicionais centenárias 
            com as mais avançadas inovações tecnológicas para criar relógios que transcendem o tempo.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-serif font-bold text-slate-50">
              Nossa História
            </h3>
            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed">
                Fundada nas montanhas suíças por Heinrich Orbit, nossa maison começou como uma pequena 
                oficina dedicada à criação de relógios de precisão para navegadores e exploradores.
              </p>
              <p className="text-lg leading-relaxed">
                Hoje, somos reconhecidos mundialmente como uma das mais prestigiosas manufacturas de 
                relógios de luxo, mantendo os mesmos padrões de excelência que nos definem há 150 anos.
              </p>
              <p className="text-lg leading-relaxed">
                Cada relógio Orbit é testado rigorosamente e certificado cronômetro, garantindo não 
                apenas beleza, mas também a precisão absoluta que nossa marca representa.
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium"
            >
              CONHEÇA NOSSA MANUFATURA
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden premium-shadow">
              <img 
                src="public/novo-relogio.jpeg"
                alt="Orbit Manufacture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-effect rounded-lg p-4">
                  <h4 className="font-serif font-semibold text-slate-50 mb-2">
                    Atelier Suíço
                  </h4>
                  <p className="text-sm text-slate-300">
                    Nossos mestres relojoeiros trabalham em um ambiente controlado onde cada detalhe é perfeição
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover-lift premium-shadow">
                <achievement.icon className="h-12 w-12 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-serif font-bold text-slate-50 mb-2">
                  {achievement.title}
                </div>
                <div className="text-slate-400 font-medium">
                  {achievement.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif font-bold text-slate-50 text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover-lift premium-shadow h-full">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-500/10 rounded-xl p-3 group-hover:bg-amber-500/20 transition-colors">
                      <value.icon className="h-8 w-8 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-serif font-bold text-slate-50 mb-3">
                        {value.title}
                      </h4>
                      <p className="text-slate-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
       
        
      </div>
    </section>
  );
};

export default About;
