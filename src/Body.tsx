import { useState } from 'react';
import Gif from './Gif';
import PieChart from './PieChart';
import ProgressCircle from './ProgressBar';
import React from 'react';
import Timer from './Timer';
import Popup from './Popup';

function Body() {
  const [popup, setPopup] = useState(false);

  const onCloseModal = () => setPopup(false);

  const onOpenModal = () => setPopup(true);

  return (
    <div>
      <h1 className="pageTitle">Presale is live</h1>
      <img className="solanaLogo" src="https://cryptologos.cc/logos/solana-sol-logo.png?v=029" alt="Solana logo" />
      <h3 className="pageSubtitle">When your SOL is tired of all the financial burdens, you must seek Solvation</h3>
      <Gif />
      <div className="bodyContainer">
        <div className="pageBody" id='presale'>
          <h2>Sale ends in</h2>
          <Timer />
          <ProgressCircle />
          <button className="buyButton" type="button" onClick={onOpenModal}>
            Buy $SOLV
          </button>
          <h3 className="details">Details</h3>
          <div className="detailsContent">
            <h4 className="detailsTitle">
              Token Distribution{' '}
              <span>
                <p>72 hours after presale ends</p>
              </span>
            </h4>
            <h4 className="detailsTitle">
              Token Decimals
              <span>
                <p>will be determined by the amount of SOL contributed at the end of the presale</p>
              </span>
            </h4>
          </div>
        </div>
        <div className="pageBody2" id='solvenomics'>
          <h2>Solvenomics</h2>
          <h3>Total Supply: 3,333,333,333</h3>
          <PieChart />
          <h3 className="details">Details</h3>
          <div className="detailsContent">
          <h4 className="detailsTitle">
              Token Name
              <span>
                <p>Solvation</p>
              </span>
            </h4>
            <h4 className="detailsTitle">
              Token Symbol
              <span>
                <p>$SOLV</p>
              </span>
            </h4>
            <h4 className="detailsTitle">
              Token Address{' '}
              <span>
                <p>To be announced</p>
              </span>
            </h4>
            <h4 className="detailsTitle">
              Decimals
              <span>
                <p>6</p>
              </span>
            </h4>
          </div>
        </div>
        <div className="pageBody2" id='roadmap'>
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
        <div className="contactWrapper" id='contact'>
          <h2>Contact</h2>
          <a target="_blank" href="https://t.me/solvationcoin"><img src="https://cdn.discordapp.com/attachments/1117557234461847723/1223647273255178341/telegram_2111646.png?ex=661a9d54&is=66082854&hm=dbdd675f6f4dddd5d142a4819db37012bd467a2bee88cf62915b0a3271f44b56&" alt="telegram icon" className="telegramIcon" /></a>
          <a target="_blank" href="https://twitter.com/SolvationCoin"><img src="https://cdn.discordapp.com/attachments/1117557234461847723/1223647273007976458/vecteezy_social-media-x-logo-black-and-white-png_36623772.png?ex=661a9d54&is=66082854&hm=b031818aa30cc2046da442bb3a04f48f3f059b199e7abb778f8eab8b4b004c61&" alt="X icon" className="xIcon" /></a>
          <div>
        <img
        className="logoBottom"
        src="https://cdn.discordapp.com/attachments/1117557234461847723/1222307219471732816/banner7.png?ex=6615bd4e&is=6603484e&hm=6b9f79ea049da0d124e6f8b56cedfd0a089e36f38674a0e3ce69df8711c29eed&"
        alt="Logo"
      />
      </div>
      <h5>$SOLV is a meme-based cryptocurrency devoid of intrinsic value and not intended for investment purposes. It functions primarily as a community and cultural token, akin to $Pepe, offering no guarantees or utility, serving purely for entertainment.</h5>
        </div>
      </div>
      {popup && <Popup onClose={onCloseModal} />}
    </div>
  );
}

export default Body;
