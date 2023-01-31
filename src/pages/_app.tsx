import { type AppType } from "next/dist/shared/lib/utils";
import { overpass } from "../font";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={overpass.className}>
      <Component {...pageProps} />
    </div>
  )
};

export default MyApp;
