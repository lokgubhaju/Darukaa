import cn from "classnames";
import s from "./HorizontalSlider.module.scss";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalSliderCardProps {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  media?: string;
  className?: string;
}

const HorizontalSliderCard: React.FC<HorizontalSliderCardProps> = ({
  id,
  title,
  description,
  backgroundColor,
  media,
  className,
}) => (
  <div
    className={cn(s["horizontal-slider--inner__card"], 'p-8')}
    style={{ backgroundColor }}
  >
    <h1 className="h1-md-max md:h1 capitalize">{title}</h1>
    <p className={cn(s["horizontal-slider--inner__card--body-copy"], 'text-2xl')}>{description}</p>
    {media && <p>{media}</p>}
  </div>
);

const HorizontalSlider = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 100px",
          end: "2000 top",
          scrub: true,
          pin: true
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  const cards = [
    {
      id: "card-1",
      title: "Our visionary journey",
      description:
        "Use an interactive, horizontally scrolling timeline that showcases Darukaa Earth’s inception, key milestones, and future aspirations. Each milestone could have a short animation or pop-up box that provides more context.",
      backgroundColor: "cadetblue",
      media: "",
    },
    {
      id: "card-2",
      title: "Mission statement",
      description:
        "Include images and short clips of the team, the technology being used, and snippets of nature to humanize the narrative.",
      backgroundColor: "hsla(36.158940397350996, 94.97%, 68.82%, 1.00)",
    },
    {
      id: "card-3",
      title: "Our Team",
      description:
        "As users scroll through this section, include subtle sound effects like birds chirping, forest sounds, or city noises that correlate with the content being shown.",
      backgroundColor: "#32aa8d",
    },
  ];

  return (
    <main className={cn(s["horizontal-slider--outer"])}>
      <div ref={triggerRef}>
        {/* Slider container holding all cards */}
        <div
          className={cn(
            s["horizontal-slider--container"],
            "flex items-center container"
          )}
        >
          {/* <h1 className="h1-md-max md:h1 mt-4">Our Visionary Journey</h1> */}
        </div>
        <div ref={sectionRef} className={cn(s["horizontal-slider--inner"])}>
          {cards.map((card) => (
            <HorizontalSliderCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              backgroundColor={card.backgroundColor}
              media={card?.media}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HorizontalSlider;
