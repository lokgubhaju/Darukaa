"use client";
// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import cn from "classnames";
import s from "./Slider.module.scss";

function Slider() {
  return (
    <Splide
      options={{
        type: "loop",
        gap: "20px",
        drag: true,
        focus: "center",
        arrows: false,
        autoplay: false,
        pauseOnHover: false,
        cover: true,
        perPage: 1.5,
        breakpoints: {
          640: {
            perPage: 1,
          },
        },
        height: "60vh",
        lazyLoad: "sequential",
        // isNavigation: true,
      }}
      className={cn(s["slider-container"])}
      extensions={{ AutoScroll }}
    >
      <SplideSlide className="flex items-center rounded-20 overflow-hidden h-full">
        <p className={cn(s["slider-container__text"])}>
          The name "Darukaa" carries deep connections to nature and service in
          Hindu mythology. As the devoted charioteer of Lord Krishna, Darukaa
          represents steadfast dedication and guidance, values we hold dear in
          our work. In Sanskrit, "Darukaa" also means "tree" or is associated
          with forests, symbolizing life, growth, and the natural world.
        </p>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/slider/slider_1.jpg"
          className="object-cover"
        >
          <source src="/images/slider/slider_1.mp4" type="video/mp4" />
        </video>
      </SplideSlide>
      <SplideSlide className="flex items-center rounded-20 overflow-hidden h-full">
        <p className={cn(s["slider-container__text"], "flex-1")}>
          Our mission is to drive radical transparency in nature-based finance,
          fostering a sustainable future while empowering local communities to
          take charge of climate and biodiversity solutions.
        </p>
        <Image
          src="/images/slider/slider_2.jpg"
          alt="slider 2"
          width={100}
          height={100}
        />
      </SplideSlide>
    </Splide>
  );
}
export default Slider;
