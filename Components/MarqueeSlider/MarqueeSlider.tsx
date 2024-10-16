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
        <a href="https://cma-india.in/" target="_blank">
          <Image
            src="/images/partners/CMAI.png"
            alt="Image of CMAI"
            width={100}
            height={50}
          />
        </a>
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <a href="https://heliware.co.in/" target="_blank">
          <Image
            src="/images/partners/Heliware.png"
            alt="Image of Heliware"
            width={200}
            height={100}
          />
        </a>
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <a href="https://iigst.in/" target="_blank">
          <Image
            src="/images/partners/RSIGST.png"
            alt="Image of RSIGST"
            width={100}
            height={50}
          />
        </a>
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <a href="https://www.startupindia.gov.in/" target="_blank">
          <Image
            src="/images/partners/startup-india.png"
            alt="Image of startup india"
            width={150}
            height={100}
          />
        </a>
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <a href="https://www.makeinindia.com/" target="_blank">
          <Image
            src="/images/partners/make-in-india.png"
            alt="Image of make in india"
            width={150}
            height={100}
          />
        </a>
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <a href="http://www.digitalindia.gov.in/" target="_blank">
          <Image
            src="/images/partners/digital-india.png"
            alt="Image of digital india"
            width={200}
            height={150}
          />
        </a>
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <a href="https://airminers.com/" target="_blank">
          <Image
            src="/images/partners/airminers.png"
            alt="Image of airminers"
            width={150}
            height={100}
          />
        </a>
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <a href="https://brainforest.global/" target="_blank">
          <Image
            src="/images/partners/brainforest.png"
            alt="Image of brainforest"
            width={150}
            height={100}
          />
        </a>
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <a href="https://saiard.co.in/" target="_blank">
          <Image
            src="/images/partners/saiard.png"
            alt="Image of Saiard"
            width={100}
            height={100}
          />
        </a>
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <a href="https://safeinch.org/" target="_blank">
          <Image
            src="/images/partners/safe.png"
            alt="Image of Safe"
            width={200}
            height={100}
          />
        </a>
      </SplideSlide>
      <SplideSlide className={cn(s["marquee-slide"])}>
        <a href="https://climatebase.org/" target="blank">
          <Image
            src="/images/partners/Climatebase.png"
            alt="Image of Climatebase"
            width={200}
            height={100}
          />
        </a>
      </SplideSlide>
    </Splide>
  );
}

export default App;
