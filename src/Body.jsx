import React from "react";
import ProgressCircle from "./ProgressBar.jsx";
import Gif from "./Gif.jsx";
import Timer from "./Timer.jsx";

function Body() {
  return (
    <div>
      <h1 className="pageTitle">Presale is live</h1>
      <img
        className="solanaLogo"
        src="https://cryptologos.cc/logos/solana-sol-logo.png?v=029"
        alt="Solana logo"
      />
      <h3 className="pageSubtitle">
        When your SOL is tired of all the financial burdens, you must seek
        Solvation
      </h3>
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
          <h2>Solvenmoics</h2>
        </div>
      </div>
    </div>
  );
}

export default Body;
