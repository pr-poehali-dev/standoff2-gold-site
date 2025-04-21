
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Check, Download } from "lucide-react";
import StandoffHeader from "@/components/StandoffHeader";

const Success = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 text-white">
      <StandoffHeader />
      
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="h-10 w-10 text-green-400" />
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Поздравляем!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Голда успешно зачислена на ваш аккаунт Standoff 2
          </p>
          
          <Card className="bg-black/30 backdrop-blur-sm border-purple-500/30 mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-center">Детали операции</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-left text-gray-400">ID операции:</div>
                <div className="text-right font-mono">SO2-{Math.floor(Math.random() * 1000000)}</div>
                
                <div className="text-left text-gray-400">Статус:</div>
                <div className="text-right text-green-400">Выполнено</div>
                
                <div className="text-left text-gray-400">Зачислено:</div>
                <div className="text-right font-bold">1000 голды</div>
              </div>
            </CardContent>
            <CardFooter className="justify-center pt-0">
              <Button 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all"
                onClick={() => window.print()}
              >
                <Download className="mr-2 h-4 w-4" /> Сохранить чек
              </Button>
            </CardFooter>
          </Card>
          
          <div className="space-y-4">
            <p className="text-gray-300">
              Теперь вы можете запустить игру и использовать полученную голду.
            </p>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all"
              onClick={() => navigate("/")}
            >
              Вернуться на главную
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="bg-black/40 py-6 text-center text-gray-400 mt-10">
        <div className="container mx-auto">
          <p>© 2023 Standoff 2 Gold. Все права защищены.</p>
          <p className="text-sm mt-2">Этот сайт не связан с официальными разработчиками Standoff 2.</p>
        </div>
      </footer>
    </div>
  );
};

export default Success;
