import React from 'react';

const ProgressCircle = ({ progress, circleWidth }) => {
  const radius = 160;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * progress) / 100;

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const smallerDimension = Math.min(vw, vh);
  const mobileCircleWidth = smallerDimension * 0.9;

  return (
    <div className="progress-circle">
      <svg
        width={vw < 768 ? mobileCircleWidth : circleWidth}
        height={vw < 768 ? mobileCircleWidth : circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="50%" stopColor="#14f195" />
            <stop offset="100%" stopColor="#9945FF" />
          </linearGradient>
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="backgroundCircle"
        ></circle>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="progressCircle"
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke="url(#gradient)"
        ></circle>
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" className="circleText" fill="url(#gradient)">
          {progress}%
        </text>
      </svg>
    </div>
  );
};

export default ProgressCircle;
