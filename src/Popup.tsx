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
        <pre className="address">{import.meta.env.VITE_WALLET_ADDRESS}</pre>
        <img
          className="qr-code"
          src={import.meta.env.VITE_WALLET_QR_CODE.replace(/\n/g, '')}
          alt="wallet address QR code"
        />
      </div>
    </div>
  );
}
