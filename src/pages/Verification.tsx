
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Smartphone } from "lucide-react";
import StandoffHeader from "@/components/StandoffHeader";

const Verification = () => {
  const [smsCode, setSmsCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация проверки кода
    setTimeout(() => {
      setIsLoading(false);
      // В реальном приложении здесь будет проверка кода
      navigate("/success");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 text-white">
      <StandoffHeader />
      
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-md mx-auto">
          <Card className="bg-black/30 backdrop-blur-sm border-purple-500/30 overflow-hidden">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl text-center text-white">
                Подтверждение аккаунта
              </CardTitle>
              <CardDescription className="text-center text-gray-300">
                Введите код подтверждения, который был отправлен на ваш телефон
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Smartphone className="h-5 w-5 text-purple-400" />
                    <p className="text-sm text-purple-200">Код отправлен на ваш телефон</p>
                  </div>
                  
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Введите код из SMS"
                      className="text-center text-xl tracking-widest bg-black/20 border-purple-500/30 focus:border-purple-500 text-white"
                      value={smsCode}
                      onChange={(e) => setSmsCode(e.target.value.replace(/[^0-9]/g, '').substring(0, 6))}
                      maxLength={6}
                      required
                    />
                  </div>
                </div>
                
                <div className="bg-blue-900/20 border border-blue-500/30 rounded p-3 flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-200">
                    Код подтверждения необходим для защиты вашего аккаунта от несанкционированного доступа.
                  </p>
                </div>
              </form>
            </CardContent>
            
            <CardFooter className="pt-0 pb-4">
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all"
                onClick={handleSubmit}
                disabled={smsCode.length < 4 || isLoading}
              >
                {isLoading ? "Проверка..." : "Подтвердить"}
              </Button>
            </CardFooter>
          </Card>
          
          <div className="mt-4 text-center">
            <Button 
              variant="link" 
              className="text-gray-400 hover:text-gray-300"
              onClick={() => {/* Здесь может быть логика для повторной отправки кода */}}
            >
              Отправить код повторно
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="bg-black/40 py-6 text-center text-gray-400 mt-auto">
        <div className="container mx-auto">
          <p>© 2023 Standoff 2 Gold. Все права защищены.</p>
          <p className="text-sm mt-2">Этот сайт не связан с официальными разработчиками Standoff 2.</p>
        </div>
      </footer>
    </div>
  );
};

export default Verification;
