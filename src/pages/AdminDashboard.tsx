
import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const AdminDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Panel de Administración - eComerciaIA</title>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Panel de Administración</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Productos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">120</p>
                <p className="text-gray-600">Total de productos</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Usuarios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">45</p>
                <p className="text-gray-600">Usuarios registrados</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Pedidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">28</p>
                <p className="text-gray-600">Pedidos pendientes</p>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AdminDashboard;
