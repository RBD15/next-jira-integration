import type { AppProps } from "next/app";
import "../styles/global.css";
import { createContext } from "react";

const authContext = createContext({})
const auth = {
  email: undefined,
  name: undefined
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <authContext.Provider value={auth}>
      <Component {...pageProps} />;
    </authContext.Provider>
  )
}
