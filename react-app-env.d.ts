/// <reference types="react-scripts" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string
    readonly VITE_API_KEY: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }