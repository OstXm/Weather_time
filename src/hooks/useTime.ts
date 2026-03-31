import { useState, useEffect } from 'react';

export function useTime(timezone?: string, updateInterval: number = 1000) {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };

    updateTime();
    const interval = setInterval(updateTime, updateInterval);

    return () => clearInterval(interval);
  }, [updateInterval]);

  return time;
}
