"use client";
// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";
import cn from 'classnames'
import s from './Slider.module.scss'

function Slider() {
  return (
    <Splide
      options={{
        // type: "loop",
        gap: "20px",
        drag: true,
        focus: "center",
        arrows: false,
        autoplay: false,
        pauseOnHover: false,
        cover: true,
        perPage: 1.5,
        // isNavigation: true,
      }}
      className={cn(s['slider-container'])}
      onMoved={updateProgress}
      //   extensions={{ AutoScroll }}
    >
      <SplideSlide className="flex items-center rounded-20 overflow-hidden">
        <video autoPlay muted loop playsInline poster="/">
          <source src="/videos/mission.mp4" type="video/mp4" />
        </video>
      </SplideSlide>
      <SplideSlide className="flex items-center rounded-20 overflow-hidden">
        <video autoPlay muted loop playsInline poster="/">
          <source src="/videos/visionary-journey.mp4" type="video/mp4" />
        </video>
      </SplideSlide>
      <SplideSlide className="flex items-center rounded-20 overflow-hidden">
        <Image src="/images/Our-team.png" alt="Image 2" layout="fill" />
      </SplideSlide>
      <div className={cn(s['progress-bar'])}>
        <div className={cn(s['progress-bar__progress'])} id="progress"></div>
      </div>
    </Splide>
  );
}

const updateProgress = (splide: any) => {
  const progress = document.getElementById("progress");
  if (progress) {
    const totalSlides = splide.length;
    const currentIndex = splide.index + 1; // 1-based index
    const percentage = (currentIndex / totalSlides) * 100;
    progress.style.width = `${percentage}%`;
  }
};
export default Slider;
