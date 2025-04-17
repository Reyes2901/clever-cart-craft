
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-12">
          <h1 className="text-9xl font-bold text-shop-blue mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Página No Encontrada</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            No podemos encontrar la página que estás buscando. Es posible que haya sido movida, eliminada o nunca existió.
          </p>
          <Button className="bg-shop-blue hover:bg-shop-lightBlue" asChild>
            <Link to="/">Volver al Inicio</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
