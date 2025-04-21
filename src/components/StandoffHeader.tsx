
import { Button } from "@/components/ui/button";

const StandoffHeader = () => {
  return (
    <header className="bg-black/50 backdrop-blur-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/placeholder.svg" 
            alt="Standoff 2 Logo" 
            className="h-8 w-8"
          />
          <span className="font-bold text-xl">Standoff 2 Gold</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-purple-400 transition-colors">Главная</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Как получить</a>
          <a href="#" className="hover:text-purple-400 transition-colors">FAQ</a>
          <a href="#" className="hover:text-purple-400 transition-colors">Отзывы</a>
        </nav>
        
        <Button className="bg-purple-600 hover:bg-purple-700">
          Войти
        </Button>
      </div>
    </header>
  );
};

export default StandoffHeader;
