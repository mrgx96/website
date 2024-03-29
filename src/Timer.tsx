import React from 'react';
import { useEffect, useState } from 'react';

function Timer(saleDate) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      const saleDate = new Date('2024-04-25 00:00:00').getTime();
      const now = new Date().getTime();
      const distance = saleDate - now;
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        clearInterval(timerId);
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [saleDate]);
  return (
    <div className="countdownContainer">
      <div>
        <p id="days">{days}</p>
        <span>Days</span>
      </div>
      <div>
        <p id="hours">{hours}</p>
        <span>Hours</span>
      </div>
      <div>
        <p id="minutes">{minutes}</p>
        <span>Minutes</span>
      </div>
      <div>
        <p id="seconds">{seconds}</p>
        <span>Seconds</span>
      </div>
    </div>
  );
}

export default Timer;
