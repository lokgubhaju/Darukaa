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

          // Once all images are loaded, set state to true
          if (loadedImages === frameCount) {
            setImagesLoaded(true);
          }
        };
      });
    };
    loadImages();
  }, [frameCount]);

  useEffect(() => {
    if (!imagesLoaded) return; // Only execute if images are fully loaded

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const screenWidth = window.innerWidth; // Use innerWidth for visible viewport
    const screenHeight = window.innerHeight; // Use innerHeight for visible viewport
    if (canvas && context) {
      canvas.width = screenWidth;
      canvas.height = screenHeight;
    }

    const renderFrame = (index: number) => {
      if (context && images.current[index]) {
        context.clearRect(0, 0, screenWidth, screenHeight);
        context.drawImage(
          images.current[index],
          0,
          0,
          screenWidth,
          screenHeight
        );
      }
    };

    const updateImage = (progress: number) => {
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(progress * frameCount)
      );
      renderFrame(frameIndex);
    };

    // ScrollTrigger for canvas pinning and image sequence animation
    gsap.to(
      {},
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${window.innerHeight * frameCount * 0.005}`,
          // end: "bottom top", // Adjust this multiplier for total scroll duration
          scrub: true,
          pin: true,
          markers: true,
          pinSpacing: true,
          // anticipatePin: 1,
          onUpdate: (self) => updateImage(self.progress),
        },
        id: "heroSequence",
      }
    );

    // Initial frame render
    renderFrame(0);

    textPanelRefs.current.forEach((textPanel, index) => {
      gsap.fromTo(
        textPanel,
        { opacity: 0, y: 50 }, // Start with opacity 0 and move up
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: textPanel,
            start: "top 75%",
            end: "top 50%",
            scrub: true,
            toggleActions: "play none none reverse", // Trigger animation in and out
          },
          duration: 1, // Animation duration
        }
      );
    });

    // Refresh ScrollTrigger calculations after layout changes
    ScrollTrigger.refresh();

    // Clean up ScrollTrigger on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [frameCount, imagesLoaded]); // Only re-run when images are loaded

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
          <canvas ref={canvasRef} />
        </div>

        {/* Text Panels */}
        <div className={cn(s["lottie-animation-text-panels"])}>
          {scrollTexts.map((item, index) => (
            <div
              className={cn(s["lottie-animation-text-panels__text-panel"])}
              key={index}
              ref={(el) => {
                if (el) textPanelRefs.current[index] = el; // Assign only if 'el' exists
              }}
            >
              <h2 className="text-5xl">{item.title}</h2>
              <p className="mt-4">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LottieAnimation;
