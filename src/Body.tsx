import React from 'react';
import ProgressCircle from './ProgressBar';
import Gif from './Gif';
import Timer from './Timer';
import PieChart from './PieChart';

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
          <div className="detailsContent">
            <h4 className="detailsTitle">Token Distribution <span><p>72 hours after presale ends</p></span></h4>
            <h4 className="detailsTitle">Token Price<span><p>will be determined by the amount of SOL contributed at the end of the presale</p></span></h4>
          </div>
        </div>
        <div className="pageBody2">
          <h2>Solvenomics</h2>
          <h3>Total Supply: 3,333,333,333</h3>
          <PieChart />
        </div>
        <div className="pageBody2">
          <h2>Roadmap</h2>
          <div className="phaseWrapper">
          <div className="phaseContainer">
            <h3>Phase 1</h3>
              <li>Presale Launch</li>
              <li>Presale Conclusion</li>
          </div>
          <div className="phaseContainer">
          <h3>Phase 2</h3>
            <li>Token Distribution</li>
            <li>DEX Listing</li>
          </div>
          <div className="phaseContainer">
            <h3>Phase 3</h3>
              <li>Memes & Airdrops</li>
              <li>CEX Listings</li>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
