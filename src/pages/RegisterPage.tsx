// src/pages/RegisterPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import axios from "axios";



const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const BASE_URL = import.meta.env.VITE_API_URL;


    async function RegistrarCliente(nombre: string, apellido: string, correo: string, password: string) {
      const response = await fetch(`${BASE_URL}/register-cliente/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellido,
          correo,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error en el registro: ${response.status}`);
      }

      return await response.json();  // Si tu API devuelve algo como { message: 'ok' }
    }

    try {
      const result = await RegistrarCliente(username, apellido, email, password);
      console.log("Registro exitoso:", result);
      alert("¡Registro exitoso!");
      navigate("/login");
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Hubo un problema al registrarte.");
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4">
      <Helmet>
        <title>Registro - eComerciaIA</title>
      </Helmet>

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Crear cuenta</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
                <Input
                type="text"
                placeholder="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button type="submit" className="w-full">Registrarse</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;

