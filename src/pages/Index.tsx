
import { Helmet } from "react-helmet";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { CategoryGrid } from "@/components/CategoryGrid";
import {CheckoutProvider} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

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
          <FeaturedProducts />
          
         
          
        </main>
        
        <Footer />
      </div>
    </>
  );
};
const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const appearance = { /* appearance */ };
const options = {
  layout: {
    type: 'accordion',
    defaultCollapsed: false,
    radios: true,
    spacedAccordionItems: false
  }
};
const clientSecret = {{CLIENT_SECRET}};
const elements = stripe.elements({ clientSecret, appearance });
const paymentElement = elements.create('payment', options);
paymentElement.mount('#payment-element');

export default Index;
