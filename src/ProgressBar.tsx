import React, { useState, useEffect } from 'react';
import ProgressCircle from './ProgressCircle';

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const intervals = 1; // seconds

  useEffect(() => {
    const interval = setInterval(() => {
      const saleDateSince = new Date(import.meta.env.VITE_SALE_DATE_SINCE).getTime();
      const saleDateUntil = new Date(import.meta.env.VITE_SALE_DATE_UNTIL).getTime();
      const now = new Date().getTime();
      const totalSpan = saleDateUntil - saleDateSince;
      const timeSpan = now - saleDateSince;
      if (timeSpan < 0) {
        setProgress(0);
      } else {
        setProgress(((timeSpan / totalSpan) * 100) | 0);
      }
      if (progress >= 100) {
        clearInterval(interval); // Stop the interval once progress reaches 100%
      }
    }, intervals * 1000); // Convert hours to milliseconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [progress, intervals]);

  return (
    <div className="progressBar">
      <ProgressCircle progress={progress} circleWidth="350" />
    </div>
  );
}

export default ProgressBar;
