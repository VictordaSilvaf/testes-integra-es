import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <div className="container mx-auto p-8 relative z-10">
      <div className="mb-4">
        <Link to="/">
          <Button variant="outline">← Voltar para Home</Button>
        </Link>
      </div>
      <Card>
        <CardHeader className="gap-4">
          <CardTitle className="text-3xl font-bold">Sobre o Projeto</CardTitle>
          <CardDescription>Informações sobre este projeto</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Tecnologias Utilizadas
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Bun - Runtime JavaScript/TypeScript ultra-rápido</li>
              <li>React 19 - Biblioteca para construção de interfaces</li>
              <li>React Router - Sistema de rotas para SPA</li>
              <li>Tailwind CSS - Framework CSS utility-first</li>
              <li>Radix UI - Componentes acessíveis</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Recursos</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Hot Module Replacement (HMR)</li>
              <li>Sistema de rotas com React Router</li>
              <li>Componentes UI reutilizáveis</li>
              <li>Estilização com Tailwind CSS</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
