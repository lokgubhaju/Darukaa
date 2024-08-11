import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from '@next/font/google';

const poppings = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
