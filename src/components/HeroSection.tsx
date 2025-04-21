
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-pink-500 to-purple-500 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Bienvenidos a <span className="text-yellow-300">eComerciaIA</span>
            </h1>
            <p className="mt-4 text-lg text-white/90 max-w-lg mx-auto md:mx-0 mb-8">
              Tu destino para encontrar los mejores productos tecnológicos al mejor precio.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 h-auto rounded-full" 
                size="lg" 
                asChild
              >
                <Link to="/products">Ver Productos</Link>
              </Button>
              <Button 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-white px-8 py-3 h-auto rounded-full" 
                size="lg" 
                asChild
              >
                <Link to="/category/electronics">Ofertas Especiales</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&auto=format&fit=crop"
                alt="Tecnología moderna" 
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-xl hidden md:block">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-100 rounded-full p-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Envío Gratis</p>
                    <p className="text-xs text-gray-500">En compras mayores a $99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
