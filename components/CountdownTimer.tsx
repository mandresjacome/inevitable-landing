'use client';

import { useEffect, useState } from 'react';
import { CONFIG } from '@/lib/constants';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = (): TimeLeft => {
      const difference = CONFIG.targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Calcular inmediatamente
    setTimeLeft(calculateTimeLeft());

    // Actualizar cada segundo
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Evitar hydration mismatch mostrando un skeleton en el primer render
  if (!mounted) {
    return (
      <div className="flex gap-4 justify-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="text-center">
            <div className="bg-white/10 rounded-lg p-4 min-w-[80px] h-[100px] animate-pulse" />
          </div>
        ))}
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Minutos' },
    { value: timeLeft.seconds, label: 'Segundos' },
  ];

  return (
    <div className="flex gap-2 sm:gap-4 justify-center flex-wrap">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[80px]">
            <div className="text-2xl sm:text-4xl font-bold text-brand-teal">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
