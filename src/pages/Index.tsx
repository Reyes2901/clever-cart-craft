
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { CategoryGrid } from "@/components/CategoryGrid";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>eComerciaIA - Tu Destino de Compras Premium</title>
        <meta name="description" content="Descubre productos increíbles con envío rápido y pagos seguros. Tu destino definitivo para compras." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <HeroSection />
          <CategoryGrid />
          <FeaturedProducts />
          
          {/* Trust Badges Section */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div className="p-6">
                  <div className="mx-auto w-12 h-12 mb-4 flex items-center justify-center bg-blue-100 rounded-full text-shop-blue">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Envío Gratis</h3>
                  <p className="text-gray-600 text-sm">En pedidos mayores a $50</p>
                </div>
                
                <div className="p-6">
                  <div className="mx-auto w-12 h-12 mb-4 flex items-center justify-center bg-blue-100 rounded-full text-shop-blue">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Pagos Seguros</h3>
                  <p className="text-gray-600 text-sm">Checkout 100% seguro</p>
                </div>
                
                <div className="p-6">
                  <div className="mx-auto w-12 h-12 mb-4 flex items-center justify-center bg-blue-100 rounded-full text-shop-blue">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Devoluciones Fáciles</h3>
                  <p className="text-gray-600 text-sm">30 días para devolver</p>
                </div>
                
                <div className="p-6">
                  <div className="mx-auto w-12 h-12 mb-4 flex items-center justify-center bg-blue-100 rounded-full text-shop-blue">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Soporte 24/7</h3>
                  <p className="text-gray-600 text-sm">Siempre aquí para ayudar</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Newsletter Section */}
          <section className="py-12 bg-shop-blue text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Suscríbete a Nuestro Boletín</h2>
              <p className="text-white/80 max-w-md mx-auto mb-6">
                Suscríbete a nuestro boletín y obtén 10% de descuento en tu primera compra más actualizaciones sobre las últimas ofertas.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="px-4 py-3 rounded-lg text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="btn-accent rounded-lg px-6 py-3 whitespace-nowrap">
                    Suscribirse
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
