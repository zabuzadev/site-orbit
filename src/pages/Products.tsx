import { Button } from "@/components/ui/button";
import { Heart, Star, Eye, MessageCircle } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Heritage Classic Gold",
      collection: "Heritage Collection",
      price: "R$ 85.000",
      originalPrice: null,
      image: "/relogio-verde.jpg",
      isNew: true,
      rating: 5,
      reviews: 24
    },
    {
      id: 2,
      name: "Platinum Chronograph",
      collection: "Platinum Series",
      price: "R$ 120.000",
      originalPrice: "R$ 145.000",
      image: "/rolex titanium.jpeg",
      isNew: false,
      rating: 5,
      reviews: 18
    },
    {
      id: 3,
      name: "Diamond Elegance",
      collection: "Royal Diamond",
      price: "R$ 200.000",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isNew: true,
      rating: 5,
      reviews: 31
    },
    {
      id: 4,
      name: "Sport Titanium Pro",
      collection: "Sport Collection",
      price: "R$ 65.000",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isNew: false,
      rating: 4.8,
      reviews: 42
    },
    {
      id: 5,
      name: "Vintage Rose Gold",
      collection: "Vintage Classic",
      price: "R$ 95.000",
      originalPrice: "R$ 110.000",
      image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isNew: false,
      rating: 4.9,
      reviews: 27
    },
    {
      id: 6,
      name: "Limited Edition Black",
      collection: "Edição Limitada",
      price: "R$ 250.000",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isNew: true,
      rating: 5,
      reviews: 12
    }
  ];

  const sendWhatsAppMessage = (productName: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o relógio ${productName}`);
    const whatsappLink = `https://wa.me/5511999999999?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              NOVO
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
              OFERTA
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" variant="secondary" className="bg-white hover:bg-white/90 text-gray-800 rounded-full">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="bg-white hover:bg-white/90 text-gray-800 rounded-full">
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* WhatsApp Button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            onClick={() => sendWhatsAppMessage(product.name)}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            CONSULTAR VIA WHATSAPP
          </Button>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="mb-2">
          <span className="text-sm text-gray-600 font-semibold tracking-wide uppercase">
            {product.collection}
          </span>
        </div>
        
        <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-800 mb-2 group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-3 w-3 sm:h-4 sm:w-4 ${
                  i < Math.floor(product.rating) 
                    ? "text-yellow-400 fill-current" 
                    : "text-gray-300"
                }`} 
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-gray-500">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold text-gray-900">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm sm:text-base text-gray-500 line-through">{product.originalPrice}</span>
            )}
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-green-600 text-green-700 hover:bg-green-50 hover:border-green-700 text-xs sm:text-sm"
            onClick={() => sendWhatsAppMessage(product.name)}
          >
            FALAR NO WHATSAPP
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* WhatsApp Floating Button */}
      <Button 
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg z-50 p-6"
        onClick={() => sendWhatsAppMessage("Atendimento Geral")}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      <div className="container-custom py-12">
        <section id="alta-relojoaria" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">Alta Relojoaria</h2>
            <p className="text-lg text-gray-600">Peças excepcionais para colecionadores exigentes</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter(p => parseInt(p.price.replace(/[^\d]/g, '')) > 150000).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section id="lancamentos" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">Lançamentos</h2>
            <p className="text-lg text-gray-600">As mais recentes obras-primas da relojoaria</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter(p => p.isNew).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section id="edicoes-limitadas" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">Edições Limitadas</h2>
            <p className="text-lg text-gray-600">Peças únicas e exclusivas</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter(p => p.collection === "Edição Limitada").map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section id="ofertas" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">Ofertas Especiais</h2>
            <p className="text-lg text-gray-600">Oportunidades únicas em relógios de luxo</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter(p => p.originalPrice).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products; 