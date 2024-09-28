import React from "react";
import cn from "classnames";
import s from "./BentoCards.module.scss";
import Image from "next/image";

interface BentoCardProps {
  id: string;
  title: string;
  body: string;
  backgroundColor?: string;
  image?: string;
  imageAlt?: string;
  video?: string;
  posterImage?: string;
  size?: number;
}

const BentoCard: React.FC<BentoCardProps> = ({
  id,
  title,
  body,
  backgroundColor,
  image,
  imageAlt,
  video,
  posterImage,
  size,
}) => (
  <div
    className={cn(
      s["bento-cards__lists--card"],
      s[`bento-cards__lists--card-${size}`]
    )}
    key={id}
    style={{ backgroundColor }}
  >
    <div className={cn(s["bento-cards__lists--card__text"])}>
    <div className={cn(s["bento-cards__lists--card__text-title"])}>{title}</div>
    <div className={cn(s["bento-cards__lists--card__text-body"])}>{body}</div>
    </div>
    {image && (
      <Image
        src={image}
        width={100}
        height={100}
        layout="responsive"
        alt={imageAlt ? imageAlt : ""}
        className={cn(s["bento-cards__lists--card__image"])}
      />
    )}
    {video && (
      <div className={cn(s["bento-cards__lists--card__video"])}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterImage}
          className="w-full h-full"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>
    )}
  </div>
);

const BentoCards: React.FC = () => {
  const cards = [
    {
      id: "card-1",
      number: "01",
      title: "Advisory & Consultancy",
      body: "We provide expert guidance to project developers and landowners, ensuring a seamless development and certification process.",
      backgroundColor: "rgb(12 12 14/var(--tw-bg-opacity))",
      image: "/images/bento/advisory-and-consultancy.jpg",
      imageAlt: "image of Advisory & Consultancy",
      size: 3,
    },
    {
      id: "card-2",
      number: "02",
      title: "Feasibility Assessments & Project Design",
      body: "We provide expert guidance to project developers and landowners, ensuring a seamless development and certification process. ",
      backgroundColor: "rgb(12 12 14/var(--tw-bg-opacity))",
      image: "/images/bento/feasibility-assessments.jpg",
      imageAlt: "Image of Feasibility Assessments & Project Design",
      size: 3,
    },
    {
      id: "card-3",
      number: "03",
      title: "Digital MRV & Credit-quality Simulation",
      body: "Leveraging state-of-the-art technology, we deliver precise monitoring and maintain high standards in credit quality.",
      image: "/images/bento/digital-MRV.jpg",
      imageAlt: "Image of Digital MRV & Credit-quality Simulation",
      size: 6,
    },
    {
      id: "card-4",
      number: "04",
      title: "Environmental & Climate Modelling",
      body: "Through accurate environmental and climate modeling, we identify potential risks and opportunities, enhancing project resilience.",
      backgroundColor: "rgb(12 12 14/var(--tw-bg-opacity))",
      size: 6,
      image: "/images/bento/environmental-climate-modelling.jpg",
      imageAlt: 'image of Environmental & Climate Modelling'
    },
    {
      id: "card-5",
      number: "05",
      title: "Biodiversity Monitoring",
      body: "We track and monitor biodiversity, promoting conservation and identifying potential co-benefits.",
      backgroundColor: "rgb(12 12 14/var(--tw-bg-opacity))",
      image: "/images/bento/biodiversity-monitoring.jpg",
      imageAlt: "Image of bio-diversity monitoring",
      size: 3,
    },
    {
      id: "card-6",
      number: "06",
      title: "Regulatory Compliance",
      body: "We support corporate net-zero initiatives by facilitating accurate and comprehensive environmental reporting.",
      backgroundColor: "gray",
      // video: "/videos/cloud.mp4",
      // posterImage: "/images/bento/cloud.png",
      size: 3,
    },
  ];

  return (
    <main className={(s["bento-cards"], "container")}>
      <h1 className="text-center text-h1-md-max md:text-h1 text-neutral-600">
        Our Impact-Driven Solutions
      </h1>
      <div className={cn(s["bento-cards__lists"])}>
        {cards.map((card) => (
          <BentoCard
            key={card.id}
            id={card.id}
            title={card.title}
            body={card.body}
            image={card?.image}
            imageAlt={card?.imageAlt}
            // video={card?.video}
            // posterImage={card?.posterImage}
            size={card.size}
            backgroundColor={card.backgroundColor}
          />
        ))}
      </div>
    </main>
  );
};

export default BentoCards;
