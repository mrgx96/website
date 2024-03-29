import React from 'react';
import ProgressCircle from './ProgressCircle';

function ProgressBar() {
  const [progress, setProgress] = React.useState(35);
  console.log(progress);
  return (
    <div className="progressBar">
      <ProgressCircle progress={progress} circleWidth="250" />
      <input
        type="range"
        min="1"
        max="100"
        value={progress}
        onChange={(ev) => setProgress(parseInt(ev.target.value))}
        className="progressInput"
      />
    </div>
  );
}

export default ProgressBar;
