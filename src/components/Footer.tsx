
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">eComerciaIA</h3>
            <p className="text-gray-600 mb-4">
              Tu tienda única para todas tus necesidades. Productos de calidad y servicio excepcional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-shop-blue">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-shop-blue">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-shop-blue">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
 
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-shop-blue flex-shrink-0 mt-1" />
                <span className="text-gray-600">
                  Calle Comercio 123,<br />
                  Ciudad, Estado 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-shop-blue flex-shrink-0" />
                <span className="text-gray-600">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-shop-blue flex-shrink-0" />
                <span className="text-gray-600">soporte@ecommercia.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} eComerciaIA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
