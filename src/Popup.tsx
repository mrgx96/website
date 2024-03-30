import React from 'react';

interface IPopup {
  onClose: Function;
}

export default function Popup({ onClose }: IPopup) {
  return (
    <div className="overlay-modal" onClick={() => onClose?.call(null)}>
      <div
        className="modal"
        onClick={(evt) => {
          evt.stopPropagation();
          evt.preventDefault();
        }}

      >
        <button className="close-button" onClick={() => onClose?.call(null)}>X</button>
        <h4>P.S. Send ONLY Solana ($SOL) to the following address</h4>
        <div className="adressContainer">
        <pre className="address">{import.meta.env.VITE_WALLET_ADDRESS}</pre>
        </div>
        <img
          className="qr-code"
          src={import.meta.env.VITE_WALLET_QR_CODE.replace(/\n/g, '')}
          alt="wallet address QR code"
        />
        <h4>How To Buy?</h4>

        <h5>Step 1: <span>Buy Solana from any exchange (Coinbase, Binance etc....)</span></h5>
        <h5>Step 2: <span>Create a Solana wallet (Phantom, Solfare etc...) and deposit your Solana into the wallet</span></h5>
        <h5>Step 3: <span>Click on "Send" and copy the address above and paste it into the field OR simply scan the QR code above from your wallet</span></h5>
        <h5>Step 4: <span>Congratulations! You successfully bought the presale and the $SOLV token will be airdropped to your wallet shortly after the presale ends</span></h5>
      </div>
    </div>
  );
}
