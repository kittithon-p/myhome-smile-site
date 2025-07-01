
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ArrowRight, Heart, Zap, Shield } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "คุณต้องการบริการอะไรเป็นหลัก?",
    options: [
      { id: "whitening", text: "ฟันขาวสวย", icon: Sparkles },
      { id: "treatment", text: "รักษาฟัน", icon: Heart },
      { id: "cosmetic", text: "ความสวยงาม", icon: Zap }
    ]
  },
  {
    id: 2,
    question: "ง예산ที่คุณคิดไว้?",
    options: [
      { id: "budget", text: "ประหยัด (< 5,000)", icon: Shield },
      { id: "mid", text: "ปานกลาง (5,000-20,000)", icon: Heart },
      { id: "premium", text: "คุณภาพสูง (> 20,000)", icon: Sparkles }
    ]
  }
];

export const QuickDecisionHelper = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answerId: string) => {
    const newAnswers = [...answers, answerId];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRecommendation = () => {
    const [service, budget] = answers;
    
    if (service === "whitening") {
      return {
        title: "ฟอกสีฟัน",
        description: "เหมาะสำหรับคุณที่ต้องการฟันขาวใส",
        price: "เริ่มต้น ฿1,500",
        action: "ดูรายละเอียดฟอกสีฟัน"
      };
    } else if (service === "cosmetic") {
      return {
        title: "ครอบฟัน/วีเนียร์",
        description: "สร้างรอยยิ้มที่สมบูรณ์แบบ",
        price: "เริ่มต้น ฿8,000",
        action: "ดูรายละเอียดครอบฟัน"
      };
    } else {
      return {
        title: "อุดฟัน/รักษารากฟัน",
        description: "รักษาฟันให้แข็งแรง ใช้งานได้นาน",
        price: "เริ่มต้น ฿300",
        action: "ดูรายละเอียดการรักษา"
      };
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const recommendation = getRecommendation();
    return (
      <Card className="bg-gradient-to-br from-dental-primary/10 to-dental-secondary/5 border-dental-primary/20">
        <CardContent className="card-spacing text-center">
          <div className="space-y-6">
            <div>
              <Sparkles className="w-12 h-12 text-dental-primary mx-auto mb-4" />
              <h3 className="heading-card text-dental-primary mb-2">
                เหมาะสำหรับคุณ!
              </h3>
              <h4 className="text-xl font-bold text-dental mb-2">
                {recommendation.title}
              </h4>
              <p className="text-body text-dental-light mb-4">
                {recommendation.description}
              </p>
              <div className="text-lg font-bold text-dental-primary">
                {recommendation.price}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                className="btn-primary"
                onClick={() => window.open('https://www.facebook.com/Myhomedent', '_blank')}
              >
                {recommendation.action}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                onClick={reset}
                className="text-dental-light"
              >
                เริ่มใหม่
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card className="bg-white/95 backdrop-blur-sm border-dental-accent/20">
      <CardContent className="card-spacing">
        <div className="space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-dental-primary/10 rounded-full p-3">
                <Heart className="w-6 h-6 text-dental-primary" />
              </div>
            </div>
            <h3 className="heading-card text-dental mb-2">
              ช่วยคุณเลือกบริการที่เหมาะสม
            </h3>
            <p className="text-body text-dental-light">
              ตอบคำถาม 2 ข้อ เพื่อแนะนำบริการที่ดีที่สุดสำหรับคุณ
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-dental mb-4">
                {question.question}
              </h4>
              <div className="flex justify-center gap-2 mb-6">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index <= currentQuestion 
                        ? 'bg-dental-primary' 
                        : 'bg-dental-accent'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {question.options.map((option) => (
                <Button
                  key={option.id}
                  variant="outline"
                  className="h-auto p-4 justify-start hover:bg-dental-accent/30 hover:border-dental-primary transition-all duration-200"
                  onClick={() => handleAnswer(option.id)}
                >
                  <option.icon className="w-5 h-5 mr-3 text-dental-primary" />
                  <span className="text-body font-medium">{option.text}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
