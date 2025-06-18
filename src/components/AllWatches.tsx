import { Button } from "@/components/ui/button";
import { Heart, Eye } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Filter } from "lucide-react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";


const AllWatches = () => {
  const products = [
    {
      id: 1,
      name: "Heritage Classic Gold",
      collection: "Heritage Collection",
      price: "R$ 85.000",
      image: "/relogio-verde.jpeg",
      isNew: true,
      rating: 5,
      reviews: 24,
      description: "Um relógio clássico em ouro 18k com mostrador guilhoché feito à mão."
    },
    {
      id: 2,
      name: "Platinum Chronograph",
      collection: "Platinum Series",
      price: "R$ 120.000",
      image: "/rolex titanium.jpeg",
      isNew: false,
      rating: 5,
      reviews: 18,
      description: "Cronógrafo em platina com complicações múltiplas e acabamento superior."
    },
    {
      id: 3,
      name: "Diamond Elegance",
      collection: "Royal Diamond",
      price: "R$ 200.000",
      image: "/relogio vaneron.jpeg",
      isNew: true,
      rating: 5,
      reviews: 31,
      description: "Relógio cravejado com diamantes VVS1, movimento automático suíço."
    },
    {
      id: 4,
      name: "Sport Titanium Pro",
      collection: "Sport Collection",
      price: "R$ 65.000",
      image: "/WhatsApp Image 2025-05-17 at 12.51.39.jpeg",
      isNew: false,
      rating: 4.8,
      reviews: 42,
      description: "Relógio esportivo em titânio com cronógrafo e resistência à água de 300m."
    },
    {
      id: 5,
      name: "Vintage Rose Gold",
      collection: "Vintage Classic",
      price: "R$ 95.000",
      image: "/relogio-amarelo.jpeg",
      isNew: false,
      rating: 4.9,
      reviews: 27,
      description: "Relógio vintage em ouro rosa com mostrador esmaltado e movimento manual."
    },
    {
      id: 7,
      name: "Classic Moonphase",
      collection: "Heritage Collection",
      price: "R$ 175.000",
      image: "/rolex-classico.jpeg",
      isNew: false,
      rating: 4.9,
      reviews: 15,
      description: "Relógio com fase lunar perpétua e calendário anual em ouro branco."
    },
    {
      id: 8,
      name: "Skeleton Artistry",
      collection: "Artisan Series",
      price: "R$ 180.000",
      image: "/WhatsApp Image 2025-03-18 at 14.30.12.jpeg",
      isNew: true,
      rating: 4.8,
      reviews: 9,
      description: "Relógio esqueletizado com movimento à vista e acabamento artesanal."
    },
    {
      id: 9,
      name: "Tourbillon Excellence",
      collection: "Platinum Series",
      price: "R$ 320.000",
      image: "/WhatsApp Image 2025-05-07 at 11.37.37.jpeg",
      isNew: false,
      rating: 5,
      reviews: 7,
      description: "Tourbillon voador em platina com ponte em safira e acabamento Geneva Stripes."
    }
  ];

  const sendWhatsAppMessage = (productName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o relógio ${productName}`);
    const whatsappLink = `https://wa.me/5511999999999?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="todos-relogios" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Todos os Relógios
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore nossa coleção completa de relógios de luxo, cada peça uma obra-prima da alta relojoaria.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Select defaultValue="todos">
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Coleção" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todas as Coleções</SelectItem>
              <SelectItem value="heritage">Heritage Collection</SelectItem>
              <SelectItem value="platinum">Platinum Series</SelectItem>
              <SelectItem value="royal">Royal Diamond</SelectItem>
              <SelectItem value="sport">Sport Collection</SelectItem>
              <SelectItem value="vintage">Vintage Classic</SelectItem>
              <SelectItem value="artisan">Artisan Series</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="preco">
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Preço" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="preco">Todos os Preços</SelectItem>
              <SelectItem value="0-100">Até R$ 100.000</SelectItem>
              <SelectItem value="100-200">R$ 100.000 - R$ 200.000</SelectItem>
              <SelectItem value="200+">Acima de R$ 200.000</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="bg-white hover:bg-slate-100">
            <Filter className="h-4 w-4 mr-2" />
            Filtrar
          </Button>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product.isNew && (
                    <span className="bg-slate-900 text-slate-50 px-3 py-1 rounded-full text-xs font-medium">
                      NOVO
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white text-slate-900 rounded-full">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white text-slate-900 rounded-full">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Shop Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <WhatsAppButton
                    fullWidth
                    onClick={() => sendWhatsAppMessage(product.name)}
                  >
                    CONSULTAR VIA WHATSAPP
                  </WhatsAppButton>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-slate-700 font-semibold tracking-wide uppercase">
                    {product.collection}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {product.name}
                </h3>

                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? "text-yellow-400 fill-current" 
                            : "text-slate-300"
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-slate-500">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-slate-900">{product.price}</span>
                  </div>
                  <WhatsAppButton
                    variant="outline"
                    size="sm"
                    onClick={() => sendWhatsAppMessage(product.name)}
                  >
                    FALAR NO WHATSAPP
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllWatches; 