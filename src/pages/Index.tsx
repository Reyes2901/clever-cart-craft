
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
          
         
          
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
