import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import s from "./HeroSequence.module.scss";
import cn from "classnames";

gsap.registerPlugin(ScrollTrigger);

const imageSequence = [
  ...Array.from(
    { length: 121 },
    (_, index) =>
      `/images/hero/hero_image_${(index + 1).toString().padStart(3, "0")}.jpg`
  ),
];

const HeroSequence = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const images = useRef<HTMLImageElement[]>([]);
  const textPanelRefs = useRef<HTMLDivElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const frameCount = imageSequence.length;
  const currentProgressRef = useRef(0); // Store the current progress

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const screenWidth = document.documentElement.clientWidth;
    const screenHeight = window.innerHeight;
  
    if (context && images.current[index]) {
      // Clear the canvas before rendering
      context.clearRect(0, 0, screenWidth, screenHeight);
  
      const img = images.current[index];
      const imgWidth = img.width;
      const imgHeight = img.height;
  
      // Calculate scaling for the image to cover the canvas while maintaining the aspect ratio
      const scale = Math.max(screenWidth / imgWidth, screenHeight / imgHeight);
      const x = (screenWidth / 2) - (imgWidth / 2) * scale;
      const y = (screenHeight / 2) - (imgHeight / 2) * scale;
  
      // Draw the image with the calculated scale and position
      context.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
    }
  };

  const updateCanvasSize = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const screenWidth = document.documentElement.clientWidth;
    const screenHeight = window.innerHeight;

    if (canvas && context) {
      canvas.width = screenWidth;
      canvas.height = screenHeight;
    }

    // Re-render the current frame after resizing
    renderFrame(Math.floor(currentProgressRef.current * frameCount));
  };

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

  // Update ScrollTrigger after a slight delay to ensure layout is stable
  const refreshScrollTrigger = () => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); // Delay ensures layout is stable
  };

  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const screenWidth = document.documentElement.clientWidth;
    const screenHeight = window.innerHeight;

    if (canvas && context) {
      canvas.width = screenWidth;
      canvas.height = screenHeight;
    }

     // Also set the containerRef width to match the visible viewport width
  if (containerRef.current) {
    containerRef.current.style.width = `${screenWidth}px`; // Set container width to visible viewport
  }

    const updateImage = (progress: number) => {
      currentProgressRef.current = progress; // Store the current progress
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(progress * frameCount)
      );
      renderFrame(frameIndex);
    };

    // ScrollTrigger for canvas pinning and image sequence animation

      // gsap.to(
      //   {},
      //   {
      //     scrollTrigger: {
      //       trigger: containerRef.current,
      //       start: "top top",
      //       end: `+=${window.innerHeight * 2}`,
      //       scrub: true,
      //       pin: true,
      //       markers: false,
      //       onUpdate: (self) => updateImage(self.progress),
      //     },
      //     id: "heroSequence",
      //   }
      // );
      const timelin1 = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 100vh",
          end: `+=${window.innerHeight * 2}`,
          scrub: true,
          pin: true,
          markers: false,
          onUpdate: (self) => updateImage(self.progress),
        },
      })

    // Initial frame render
    renderFrame(0);

    // Register ScrollTrigger for text panels
      textPanelRefs.current.forEach((textPanel, index) => {
        if (textPanel) {
          timelin1.fromTo(
            textPanel,
            { opacity: 0, y: 40},
            {
              opacity: 1,
              y: -100,
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 100vh",
                end: "bottom 30vh",
                markers: false,
                scrub: true,
                toggleActions: "play none none reverse",
              },
              duration: 1,
            }
          );
        }
      });

      const refreshScrollTrigger = () => {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 300); // Increase delay to 300ms for more stability
      };
      // Refresh ScrollTrigger after registering the text panels
      // refreshScrollTrigger();

    // Handle browser resize
    window.addEventListener("resize", updateCanvasSize);

    // Ensure that ScrollTrigger is refreshed after all content is loaded
    window.addEventListener("load", refreshScrollTrigger);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("load", refreshScrollTrigger);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [frameCount, imagesLoaded]);

  const scrollTexts = [
    {
      text: "Our planet is facing a pivotal moment, but there’s still time to make a difference. In the last 50 years, wildlife populations have dropped by 69%, yet we hold the power to reverse this trend.",
    },
    {
      text: "Tree cover loss has doubled in two decades, leaving us vulnerable to climate impacts. But every tree we plant brings us one step closer to a healthier, more resilient planet.",
    },
    {
      text: "Over 50,000 companies globally have pledged to prioritize environmental accountability. Now, we can turn this collective commitment into concrete actions that rebuild resilient ecosystems and drive meaningful change.",
    },
    {
      text: "We’re in a race, not against time, but toward a future where balance is restored, and nature thrives once more.",
    },
    {
      text: "At Darukaa Earth, we are changemakers—using innovation and nature-based solutions to rebuild ecosystems and ensure a sustainable future for all.",
    },
  ];

  return (
    <div className="relative">
      <div className={cn(s["hero-sequence"])} id="heroSequence">
        <div
          ref={containerRef}
          className={cn(s["hero-sequence-canvas-container"])}
          style={{ height: "100vh" }}
        >
          <canvas ref={canvasRef} />
        </div>

        {/* Text Panels */}
        <div className={cn(s["hero-sequence-text-panels"])}>
          {scrollTexts.map((item, index) => (
            <div
              className={cn(s["hero-sequence-text-panels__text-panel"])}
              key={index}
              ref={(el) => {
                if (el) textPanelRefs.current[index] = el;
              }}
            >
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSequence;
