import "@/styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import {gsap} from 'gsap'

gsap.registerPlugin(ScrollTrigger);
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
      <GoogleTagManager gtmId="G-TMERQ3HFH6" />
    </main>
  );
}
