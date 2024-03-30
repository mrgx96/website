/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COUNTDOWN_SINCE: string;
  readonly VITE_WALLET_ADDRESS: string;
  readonly VITE_WALLET_QR_CODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
