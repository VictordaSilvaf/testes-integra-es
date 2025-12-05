import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import logo from "../logo.svg";
import reactLogo from "../react.svg";

export function Home() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <div className="flex justify-center items-center gap-8 mb-8">
        <img
          src={logo}
          alt="Bun Logo"
          className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120"
        />
        <img
          src={reactLogo}
          alt="React Logo"
          className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] [animation:spin_20s_linear_infinite]"
        />
      </div>
      <Card>
        <CardHeader className="gap-4">
          <CardTitle className="text-3xl font-bold">Bun + React</CardTitle>
          <CardDescription>Sistema com rotas configuradas</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Navegue pelas páginas usando os botões abaixo:</p>
          <div className="flex gap-4 justify-center">
            <Link to="/api-tester">
              <Button>API Tester</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline">Sobre</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
