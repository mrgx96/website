import React from 'react';

const ProgressCircle = ({ progress, circleWidth }) => {
  const radius = 110;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * progress) / 100;
  return (
    <div>
      <svg width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
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
      <h4 className="tokenPrice">
        Token Price: Will be determined by the amount of SOL contributed at the end of the presale
      </h4>
    </div>
  );
};

export default ProgressCircle;
