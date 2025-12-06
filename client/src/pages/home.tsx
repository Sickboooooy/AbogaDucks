import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function HomePage() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
            Descubre tu <span className="text-blue-600">AbogaDuck</span> Interior
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            El test vocacional jurídico diseñado para estudiantes de derecho en México. 
            Identifica tu especialidad ideal y obtén tu pato abogado personalizado.
          </p>
          <div className="space-y-4">
             <Button onClick={() => setLocation("/test")} size="lg" className="w-full md:w-auto text-lg px-8">
               Iniciar Test Vocacional
             </Button>
             <p className="text-sm text-gray-500">Toma aproximadamente 10 minutos</p>
          </div>
        </div>
        
        <div className="hidden md:block">
           <Card className="border-0 shadow-xl overflow-hidden">
             <CardContent className="p-0">
               <img 
                 src="/abogaduck_variations.png" 
                 alt="AbogaDucks" 
                 className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
               />
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
