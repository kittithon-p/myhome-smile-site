
import { useState, useEffect } from "react";
import { Timer } from "lucide-react";

interface CountdownTimerProps {
  endDate: string;
}

export const CountdownTimer = ({ endDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(endDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, [endDate]);

  if (timeLeft.days <= 7) {
    return (
      <div className="flex items-center justify-center bg-red-500/90 text-white px-3 py-2 rounded-lg text-xs font-bold animate-pulse">
        <Timer className="w-3 h-3 mr-1" />
        เหลือ {timeLeft.days}วัน {timeLeft.hours}ชม.
      </div>
    );
  }
  
  return null;
};
