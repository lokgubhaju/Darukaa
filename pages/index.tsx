import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>Hello World HomePage</h1>
      <Navbar />
    </main>
  );
}
