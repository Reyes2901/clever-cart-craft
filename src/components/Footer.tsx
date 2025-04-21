
import { Link } from "react-router-dom";
import {  Mail, Phone, MapPin } from "lucide-react";

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
            
          </div>
          
 
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contáctanos</h3>
            <ul className="space-y-4">
             
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
