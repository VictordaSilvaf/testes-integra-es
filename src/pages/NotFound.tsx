import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <Card>
        <CardHeader className="gap-4">
          <CardTitle className="text-6xl font-bold">404</CardTitle>
          <CardDescription className="text-xl">
            Página não encontrada
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">A página que você está procurando não existe.</p>
          <Link to="/">
            <Button>Voltar para Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
