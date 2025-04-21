
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StandoffHeader from "@/components/StandoffHeader";
import { Clock } from "lucide-react";

interface LocationState {
  goldAmount?: number;
}

const Verification = () => {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const navigate = useNavigate();
  const location = useLocation();
  const { goldAmount } = (location.state as LocationState) || { goldAmount: 0 };

  // Timer countdown simulation
  useState(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      
      return () => clearInterval(interval);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Имитация проверки кода
    setTimeout(() => {
      setIsLoading(false);
      navigate("/success", { state: { goldAmount } });
    }, 1500);
  };

  const handleResendCode = () => {
    // Имитация отправки нового кода
    setTimer(60);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 text-white">
      <StandoffHeader />
      
      <main className="container mx-auto px-4 py-10">
        <section className="max-w-md mx-auto mb-16">
          <Card className="bg-black/30 backdrop-blur-sm border-purple-500/30 overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Подтверждение</CardTitle>
              <CardDescription className="text-gray-300">
                Введите код, отправленный на ваш телефон
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="text-center mb-4">
                    <p className="text-sm text-gray-400 mb-1">Код подтверждения</p>
                    <Input
                      className="text-center text-xl tracking-widest bg-black/20 border-purple-500/30 focus:border-purple-500 text-white max-w-[200px] mx-auto"
                      placeholder="• • • • • •"
                      maxLength={6}
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="text-center text-sm text-gray-400 flex items-center justify-center gap-1 mt-2">
                    <Clock className="h-3 w-3" />
                    {timer > 0 ? (
                      <span>Отправить код повторно через {timer} сек.</span>
                    ) : (
                      <button 
                        type="button" 
                        className="text-purple-400 hover:text-purple-300 hover:underline"
                        onClick={handleResendCode}
                      >
                        Отправить код повторно
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="bg-purple-900/20 border border-purple-500/30 rounded p-3">
                  <p className="text-sm text-center text-purple-200">
                    На ваш телефон был отправлен 6-значный код для подтверждения получения <span className="font-bold">{goldAmount} голды</span>
                  </p>
                </div>
              </form>
            </CardContent>
            
            <CardFooter className="flex flex-col gap-2">
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all"
                onClick={handleSubmit}
                disabled={isLoading || code.length < 6}
              >
                {isLoading ? "Проверка кода..." : "Подтвердить"}
              </Button>
              
              <Button 
                variant="link" 
                className="text-gray-400 hover:text-gray-300"
                onClick={() => navigate(-1)}
              >
                Вернуться назад
              </Button>
            </CardFooter>
          </Card>
        </section>
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

export default Verification;
