import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

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
          speed: 2,
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide className="flex items-center">
        <a href="https://www.google.com/" target="_blank">
          <Image
            src="/images/partners/CMAI.png"
            alt="Image 1"
            width={200}
            height={100}
          />
        </a>
      </SplideSlide>
      <SplideSlide className="flex items-center">
        <a href="https://www.google.com/" target="_blank">
          <Image
            src="/images/partners/Heliware.png"
            alt="Image 2"
            width={200}
            height={100}
          />
        </a>
      </SplideSlide>
      <SplideSlide className="flex items-center">
        <a href="https://www.google.com/" target="_blank">
          <Image
            src="/images/partners/RSIGST.png"
            alt="Image 2"
            width={200}
            height={100}
          />
        </a>
      </SplideSlide>
      <SplideSlide className="flex items-center">
        <a href="https://www.google.com/" target="_blank">
          <Image
            src="/images/partners/CMAI.png"
            alt="Image 1"
            width={200}
            height={100}
          />
        </a>
      </SplideSlide>
      <SplideSlide className="flex items-center">
        <a href="https://www.google.com/" target="_blank">
          <Image
            src="/images/partners/Heliware.png"
            alt="Image 2"
            width={200}
            height={100}
          />
        </a>
      </SplideSlide>
      <SplideSlide className="flex items-center">
        <a href="https://www.google.com/" target="_blank">
          <Image
            src="/images/partners/RSIGST.png"
            alt="Image 2"
            width={200}
            height={100}
          />
        </a>
      </SplideSlide>
    </Splide>
  );
}

export default App;
