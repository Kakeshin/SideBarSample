/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TWITTER_END_URL: string
  readonly VITE_INSTAGRAM_END_URL: string
  readonly VITE_GITHUB_END_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
