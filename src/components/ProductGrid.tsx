import { Button } from "@/components/ui/button";
import { Heart, Star, Eye, MessageCircle } from "lucide-react";


const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Heritage Classic Gold",
      collection: "Heritage Collection",
      price: "R$ 85.000",
      originalPrice: null,
      image: "/relogio 01.jpeg",
      isNew: true,
      rating: 5,
      reviews: 24
    },
    {
      id: 2,
      name: "Rolex GMT Rootbeer",
      collection: "Platinum Series",
      price: "R$ 114.900",
      originalPrice: "R$ 145.000",
      image: "/WhatsApp Image 2025-05-20 at 10.40.07.jpeg",
      isNew: false,
      rating: 5,
      reviews: 18
    },
    {
      id: 3,
      name: "OP41 Celebration",
      collection: "Royal Diamond",
      price: "R$ 129.900,00",
      originalPrice: null,
      image: "/WhatsApp Image 2025-05-17 at 12.51.39.jpeg",
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
      image: "/WhatsApp Image 2025-05-13 at 08.49.31.jpeg",
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
      image: "/WhatsApp Image 2025-05-17 at 12.51.39.jpeg",
      isNew: false,
      rating: 4.9,
      reviews: 27
    },
    {
      id: 6,
      name: "Breitling Avenger Skyland",
      collection: "Edição Limitada",
      price: "R$ 14.900,00",
      originalPrice: null,
      image: "/relogio-verde.jpeg",
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

  return (
    <>
      <section id="alta-relojoaria" className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-white" />
              <span className="text-white font-semibold text-sm tracking-wide">ALTA RELOJOARIA</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-4">
              Mergulhe no Universo da Alta Relojoaria
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.filter(p => parseInt(p.price.replace(/[^\d]/g, '')) > 150000).map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl overflow-hidden premium-shadow hover-lift">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-2">
                    {product.isNew && (
                      <span className="bg-slate-900 text-slate-50 px-3 py-1 rounded-full text-xs font-medium">
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
                    <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white text-slate-900 rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="bg-white/90 hover:bg-white text-slate-900 rounded-full">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Quick Shop Button */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-green-700/30 transition-all duration-300"
                      onClick={() => sendWhatsAppMessage(product.name)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      CONSULTAR VIA WHATSAPP
                    </Button>
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
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-green-700/30 transition-all duration-300"
                      onClick={() => sendWhatsAppMessage(product.name)}
                    >
                      FALAR NO WHATSAPP
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="colecoes" className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">Nossas Coleções</h2>
            <p className="text-lg text-slate-300">Explore nossas coleções exclusivas de relógios de luxo</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.filter(p => !p.isNew).map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl overflow-hidden premium-shadow hover-lift">
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
                    {product.originalPrice && (
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        OFERTA
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
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-green-700/30 transition-all duration-300"
                      onClick={() => sendWhatsAppMessage(product.name)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      CONSULTAR VIA WHATSAPP
                    </Button>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="mb-2">
                    <span className="text-sm text-slate-700 font-semibold tracking-wide uppercase">
                      {product.collection}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
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
                              : "text-slate-300"
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-500">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl sm:text-2xl font-bold text-slate-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm sm:text-base text-slate-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-green-700/30 transition-all duration-300"
                      onClick={() => sendWhatsAppMessage(product.name)}
                    >
                      FALAR NO WHATSAPP
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lancamentos" className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">Lançamentos</h2>
            <p className="text-lg text-slate-300">As mais recentes obras-primas da relojoaria</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.filter(p => p.isNew).map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl overflow-hidden premium-shadow hover-lift">
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
                    {product.originalPrice && (
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        OFERTA
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
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-green-700/30 transition-all duration-300"
                      onClick={() => sendWhatsAppMessage(product.name)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      CONSULTAR VIA WHATSAPP
                    </Button>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="mb-2">
                    <span className="text-sm text-slate-700 font-semibold tracking-wide uppercase">
                      {product.collection}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
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
                              : "text-slate-300"
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-500">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl sm:text-2xl font-bold text-slate-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm sm:text-base text-slate-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-green-700/30 transition-all duration-300"
                      onClick={() => sendWhatsAppMessage(product.name)}
                    >
                      FALAR NO WHATSAPP
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="edicoes-limitadas" className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">Edições Limitadas</h2>
            <p className="text-lg text-slate-300">Peças exclusivas para colecionadores exigentes</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.filter(p => p.collection === "Edição Limitada").map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl overflow-hidden premium-shadow hover-lift">
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
                    {product.originalPrice && (
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        OFERTA
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
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-green-700/30 transition-all duration-300"
                      onClick={() => sendWhatsAppMessage(product.name)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      CONSULTAR VIA WHATSAPP
                    </Button>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="mb-2">
                    <span className="text-sm text-slate-700 font-semibold tracking-wide uppercase">
                      {product.collection}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
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
                              : "text-slate-300"
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-500">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl sm:text-2xl font-bold text-slate-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm sm:text-base text-slate-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-green-700/30 transition-all duration-300"
                      onClick={() => sendWhatsAppMessage(product.name)}
                    >
                      FALAR NO WHATSAPP
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ofertas" className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">Ofertas Especiais</h2>
            <p className="text-lg text-slate-300">Oportunidades únicas em relógios de luxo</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.filter(p => p.originalPrice).map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl overflow-hidden premium-shadow hover-lift">
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
                    {product.originalPrice && (
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        OFERTA
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
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-green-700/30 transition-all duration-300"
                      onClick={() => sendWhatsAppMessage(product.name)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      CONSULTAR VIA WHATSAPP
                    </Button>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="mb-2">
                    <span className="text-sm text-slate-700 font-semibold tracking-wide uppercase">
                      {product.collection}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
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
                              : "text-slate-300"
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-500">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl sm:text-2xl font-bold text-slate-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm sm:text-base text-slate-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-green-700/30 transition-all duration-300"
                      onClick={() => sendWhatsAppMessage(product.name)}
                    >
                      FALAR NO WHATSAPP
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductGrid;
