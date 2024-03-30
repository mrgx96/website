/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SALE_DATE_SINCE: string;
  readonly VITE_SALE_DATE_UNTIL: string;
  readonly VITE_WALLET_ADDRESS: string;
  readonly VITE_WALLET_QR_CODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
