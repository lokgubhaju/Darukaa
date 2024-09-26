import "@/styles/globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import {gsap} from 'gsap'
import Script from "next/script";

gsap.registerPlugin(ScrollTrigger);
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','G-TMERQ3HFH6');
          `,
        }}
      />
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
      <GoogleTagManager gtmId="G-TMERQ3HFH6" />
    </main>
  );
}
