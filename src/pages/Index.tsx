
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StandoffHeader from "@/components/StandoffHeader";
import ProductCard from "@/components/ProductCard";

const goldProducts = [
  { id: 1, amount: 100, price: 0, image: "/placeholder.svg" },
  { id: 2, amount: 250, price: 0, image: "/placeholder.svg" },
  { id: 3, amount: 500, price: 0, image: "/placeholder.svg" },
  { id: 4, amount: 1000, price: 0, image: "/placeholder.svg" }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 text-white">
      <StandoffHeader />
      
      <main className="container mx-auto px-4 py-10">
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Бесплатная голда Standoff 2</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Получи голду для Standoff 2 абсолютно бесплатно! Выбери один из доступных вариантов ниже.
          </p>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {goldProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              amount={product.amount} 
              price={product.price}
              image={product.image}
            />
          ))}
        </section>
        
        <section className="bg-black/20 rounded-lg p-6 mb-12 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4">О Standoff 2</h2>
          <p className="mb-4">
            Standoff 2 — это динамичный мобильный шутер от первого лица, предлагающий захватывающие режимы игры, 
            такие как командный бой, соревновательный режим и многое другое.
          </p>
          <p>
            Голда в игре позволяет приобретать различные скины для оружия, ножи и другие косметические предметы, 
            которые выделят вас среди других игроков.
          </p>
        </section>
        
        <Card className="bg-black/30 backdrop-blur-sm border-purple-500/30 text-center mb-12">
          <CardHeader>
            <CardTitle className="text-2xl">Остались вопросы?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              Если у вас есть вопросы по поводу получения голды или работы нашего сервиса, не стесняйтесь связаться с нами.
            </p>
          </CardContent>
          <CardFooter className="justify-center">
            <Button variant="outline" className="border-purple-500 hover:bg-purple-500/20">
              Связаться с поддержкой
            </Button>
          </CardFooter>
        </Card>
      </main>
      
      <footer className="bg-black/40 py-6 text-center text-gray-400">
        <div className="container mx-auto">
          <p>© 2023 Standoff 2 Gold. Все права защищены.</p>
          <p className="text-sm mt-2">Этот сайт не связан с официальными разработчиками Standoff 2.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
