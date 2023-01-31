import { type AppType } from "next/dist/shared/lib/utils";
import { overpass } from "../font";
import clsx from 'clsx'

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={clsx(overpass.className, 'text-default')}>
      <Component {...pageProps} />
    </div>
  )
};

export default MyApp;
