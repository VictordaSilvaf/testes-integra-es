import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { APITester } from "../APITester";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ApiTesterPage() {
  return (
    <div className="container mx-auto p-8 relative z-10">
      <div className="mb-4">
        <Link to="/">
          <Button variant="outline">← Voltar para Home</Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">API Tester</CardTitle>
        </CardHeader>
        <CardContent>
          <APITester />
        </CardContent>
      </Card>
    </div>
  );
}
