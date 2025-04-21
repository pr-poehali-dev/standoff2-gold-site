
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  amount: number;
  price: number;
  image: string;
}

const ProductCard = ({ amount, price, image }: ProductCardProps) => {
  const navigate = useNavigate();
  
  const handleGetGold = () => {
    navigate('/account-details', { state: { goldAmount: amount } });
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-black/30 backdrop-blur-sm border-purple-500/30 hover:border-purple-500/70">
      <div className="relative pb-[60%] bg-gradient-to-br from-purple-600/20 to-blue-600/20">
        <img 
          src={image} 
          alt={`${amount} Gold`}
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
        <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs font-bold py-1 px-2 rounded-full">
          Бесплатно
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-center text-white">
          {amount} голды
        </CardTitle>
      </CardHeader>
      
      <CardContent className="text-center pb-2">
        <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          {price} ₽
        </p>
        <p className="text-gray-400 text-sm mt-1">Без скрытых платежей</p>
      </CardContent>
      
      <CardFooter className="pt-0 pb-4">
        <Button 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all"
          onClick={handleGetGold}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Получить сейчас
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
