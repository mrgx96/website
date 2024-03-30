import React, { useState, useEffect } from 'react';
import ProgressCircle from './ProgressCircle';

function ProgressBar() {
  const [progress, setProgress] = useState(1);
  const intervalHours = 1; // Change this to set the interval in hours

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 1);
      } else {
        clearInterval(interval); // Stop the interval once progress reaches 100%
      }
    }, intervalHours * 3600000); // Convert hours to milliseconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [progress, intervalHours]);

  return (
    <div className="progressBar">
      <ProgressCircle progress={progress} circleWidth="350" />
    </div>
  );
}

export default ProgressBar;

