"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

function App() {
  return (
    <Splide
      options={{
        type: "loop",
        gap: "20px",
        drag: "free",
        focus: "center",
        arrows: false,
        autoplay: false,
        perPage: 1.5,
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide className="flex items-center rounded-20 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/"
        >
          <source src="/videos/mission.mp4" type="video/mp4" />
        </video>
      </SplideSlide>
      <SplideSlide className="flex items-center rounded-20 overflow-hidden">
        <Image src="/images/Our-team.png" alt="Image 2" layout="fill" />
      </SplideSlide>
      <SplideSlide className="flex items-center rounded-20 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/"
        >
          <source src="/videos/visionary-journey.mp4" type="video/mp4" />
        </video>
      </SplideSlide>
    </Splide>
  );
}

export default App;
