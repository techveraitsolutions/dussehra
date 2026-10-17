import { useEffect, useState } from 'react';

// Exact Announcement Time: 20 October 2026 at 10:00 PM IST (UTC+05:30)
// 22:00:00 in +05:30 timezone = 16:30:00 UTC
export const TARGET_TIMESTAMP_MS = Date.parse('2026-10-20T22:00:00+05:30');

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMillisecondsLeft: number;
  isArrived: boolean;
}

export function useCountdown(): CountdownState {
  const calculateTimeLeft = (): CountdownState => {
    const now = Date.now();
    const diff = TARGET_TIMESTAMP_MS - now;

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        totalMillisecondsLeft: 0,
        isArrived: true,
      };
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
      totalMillisecondsLeft: diff,
      isArrived: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<CountdownState>(calculateTimeLeft);

  useEffect(() => {
    // Initial evaluation
    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
      if (updated.isArrived) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeLeft;
}
