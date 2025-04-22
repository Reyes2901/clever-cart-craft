
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LoginPage = () => {
 
  const navigate = useNavigate();

  /*const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Login attempt", { email, password });
  };*/
  //reeemplazar por el siguiente codigo
  //begin
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user= await loginUser(username, password);
      localStorage.setItem("isAuthenticated","true");
      localStorage.setItem("user",JSON.stringify(user));
      window.dispatchEvent(new Event("authChange"));
      console.log("Usuario Autenticado",user);
      alert("Inicio de sesion exitoso");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const BASE_URL = import.meta.env.VITE_API_URL;
  async function loginUser(username, password) {
    const response = await fetch(`${BASE_URL}-token-auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (!response.ok) {
      throw new Error("Credenciales inválidas");
    }
  
    const data = await response.json(); // { token: 'abc123' }
    const token = data.token;
    localStorage.setItem("token", token);
  
    // 🔁 Ahora obtenemos los datos del usuario
    const userResponse = await fetch(`${BASE_URL}/me/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  
    if (!userResponse.ok) {
      throw new Error("No se pudo obtener la información del usuario");
    }
  
    const user = await userResponse.json();
    return user; //
  }
  
  
  //end

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Helmet>
        <title>Iniciar Sesión - eComerciaIA</title>
      </Helmet>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Iniciar Sesión 
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Ingresa a tu cuenta</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <div className="mt-1">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="block w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Iniciar Sesión
              </Button>

              <div className="text-center text-sm">
                ¿No tienes una cuenta?{" "}
                <Link to="/register" className="font-medium text-shop-blue hover:text-shop-lightBlue">
                  Regístrate aquí
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
