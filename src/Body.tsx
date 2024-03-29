import React from 'react';
import ProgressCircle from './ProgressBar';
import Gif from './Gif';
import Timer from './Timer';
import PieChart from './PieChart'

function Body() {
  return (
    <div>
      <h1 className="pageTitle">Presale is live</h1>
      <img className="solanaLogo" src="https://cryptologos.cc/logos/solana-sol-logo.png?v=029" alt="Solana logo" />
      <h3 className="pageSubtitle">When your SOL is tired of all the financial burdens, you must seek Solvation</h3>
      <Gif />
      <div className="bodyContainer">
        <div className="pageBody">
          <h2>Sale ends in</h2>
          <Timer />
          <ProgressCircle />
          <button>Buy $SOLV</button>
          <h3 className="details">Details</h3>
        </div>
        <div className="pageBody2">
          <h2>Solvenomics</h2>
          <h3>Total Supply: 3,333,333,333</h3>
          <PieChart />
        </div>
      </div>
    </div>
  );
}

export default Body;
