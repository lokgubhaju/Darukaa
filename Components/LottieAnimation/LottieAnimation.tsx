import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import s from "./LottieAnimation.module.scss";
import cn from "classnames";

gsap.registerPlugin(ScrollTrigger);

const imageSequence = [
  ...Array.from(
    { length: 358 },
    (_, index) =>
      `/images/lottie-frames/lottie_frame_${index
        .toString()
        .padStart(3, "0")}.png`
  ),
];

const LottieAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const images = useRef<HTMLImageElement[]>([]);
  const textPanelRefs = useRef<HTMLDivElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const frameCount = imageSequence.length;

  // Preload all images
  useEffect(() => {
    let loadedImages = 0;
    const loadImages = () => {
      imageSequence.forEach((src, index) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          images.current[index] = img;
          loadedImages += 1;

          if (loadedImages === frameCount) {
            setImagesLoaded(true);
          }
        };
      });
    };
    loadImages();
  }, [frameCount]);

  // Function to refresh ScrollTrigger after layout changes
  const refreshScrollTrigger = () => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  };

  // Ensure ScrollTrigger setup after images are fully loaded
  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (canvas && context) {
      canvas.width = screenWidth;
      canvas.height = screenHeight;
    }

    const renderFrame = (index: any) => {
      if (context && images.current[index]) {
        context.clearRect(0, 0, screenWidth, screenHeight);
        context.drawImage(images.current[index], 0, 0, screenWidth, screenHeight);
      }
    };

    const updateImage = (progress: any) => {
      const frameIndex = Math.min(frameCount - 1, Math.floor(progress * frameCount));
      renderFrame(frameIndex);
    };

    // Delay the initialization of ScrollTrigger to allow for layout stabilization
    requestAnimationFrame(() => {
      gsap.to({}, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${window.innerHeight * 2}`, // Adjust scroll duration
          scrub: true,
          pin: true,
          pinSpacing: true,
          onUpdate: (self) => updateImage(self.progress),
          markers: false,
        },
      });

      // Initial refresh to correct positioning
      ScrollTrigger.refresh();
    });

    // Initial frame render
    renderFrame(0);

    textPanelRefs.current.forEach((textPanel, index) => {
      gsap.fromTo(
        textPanel,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: textPanel,
            start: "top 80vh",
            end: "bottom 20vh",
            scrub: true,
            markers: false,
            toggleActions: "play none none reverse",
          },
        }
      );

      // Fade-out animation
      // gsap.to(textPanel, {
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: textPanel,
      //     start: "top 50%",  // Start fading out when the top of the element is 20% from the top of the viewport
      //     end: "top 20%",     // End the fade-out when the top of the element reaches the top of the viewport
      //     scrub: true,
      //     toggleActions: "play none none reverse",
      //   },
      // });
    });

    // Add a load event listener to refresh ScrollTrigger once everything is fully loaded
    window.addEventListener("load", refreshScrollTrigger);

    // Resize Observer to watch for layout changes and trigger a refresh
    const resizeObserver = new ResizeObserver(refreshScrollTrigger);
    resizeObserver.observe(document.body);

    // Cleanup on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("load", refreshScrollTrigger);
      resizeObserver.disconnect();
    };
  }, [frameCount, imagesLoaded]);

  const scrollTexts = [
    {
      title: "Multimodal data collection",
      text: "We begin with multimodal data collection, integrating satellite and drone imagery, geospatial layers, IoT devices, and on-ground data to create a comprehensive view of the environment.",
    },
    {
      title: "Cutting edge AI/ML technology",
      text: "Our cutting-edge AI technology then processes this data, delivering precise carbon and environmental models that reveal critical insights.",
    },
    {
      title: "Holistic Visualization",
      text: "To make these insights accessible, our holistic visualization simplifies complex data into clear, actionable reports on intuitive dashboards.",
    },
  ];

  return (
    <div className="relative">
      <div className={cn(s["lottie-animation"])} id="heroSequence">
        <div
          ref={containerRef}
          className={cn(s["lottie-animation-canvas-container"])}
          style={{ height: "100vh" }}
        >
          <div className={cn(s["lottie-animation-canvas-container__inner"])}>
          <canvas ref={canvasRef} width = {'50vw'} height={'60vh'} id="canvas" />
          </div>
        </div>

        <div className={cn(s["lottie-animation-text-panels"])}>
          {scrollTexts.map((item, index) => (
            <div
              className={cn(s["lottie-animation-text-panels__text-panel"])}
              key={index}
              ref={(el) => {
                if (el) textPanelRefs.current[index] = el;
              }}
            >
              <h2 className={cn(s["lottie-animation-text-panels__text-panel__headline"])}>{item.title}</h2>
              <p className={cn(s["lottie-animation-text-panels__text-panel__body-copy"])}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LottieAnimation;
