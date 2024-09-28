"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import cn from "classnames";
import s from "./MarqueeSlider.module.scss";

function App() {
  return (
    <Splide
      options={{
        type: "loop",
        gap: "10px",
        drag: "free",
        focus: "center",
        arrows: false,
        pagination: false,
        perPage: 6,
        autoScroll: {
          rewind: false,
          speed: 1,
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide className={cn(s["marquee-slide"])}>
        <a href="https://www.google.com/" target="_blank">
          <Image
            src="/images/partners/CMAI.png"
            alt="Image 1"
            width={100}
            height={50}
          />
        </a>
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <a href="https://www.google.com/" target="_blank">
          <Image
            src="/images/partners/Heliware.png"
            alt="Image 2"
            width={200}
            height={100}
          />
        </a>
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <a href="#" target="_blank">
          <Image
            src="/images/partners/RSIGST.png"
            alt="Image 2"
            width={100}
            height={50}
          />
        </a>
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <Image
          src="/images/partners/startup-india.png"
          alt="Image 1"
          width={150}
          height={100}
        />
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <Image
          src="/images/partners/make-in-india.png"
          alt="Image 2"
          width={100}
          height={50}
        />
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <Image
          src="/images/partners/digital-india.png"
          alt="Image 2"
          width={150}
          height={100}
        />
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <Image
          src="/images/partners/airminers.png"
          alt="Image 2"
          width={150}
          height={100}
        />
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <Image
          src="/images/partners/brainforest.png"
          alt="Image 2"
          width={150}
          height={100}
        />
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <Image
          src="/images/partners/saiard.png"
          alt="Image 2"
          width={100}
          height={100}
        />
      </SplideSlide>
    </Splide>
  );
}

export default App;
