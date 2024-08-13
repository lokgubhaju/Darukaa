import React from "react";
import cn from "classnames";
import s from "./StackCards.module.scss";
import Image from "next/image";

interface CardProps {
  id: string;
  pretitle: string;
  headline: string;
  body: string;
  imageUrl?: string;
  imageAlt: string;
  videoUrl?: string;
  posterUrl?: string;
}

const Card: React.FC<CardProps> = ({
  id,
  pretitle,
  headline,
  body,
  imageUrl,
  videoUrl,
  imageAlt,
  posterUrl,
}) => (
  <li className={cn(s["card"])} id={id}>
    <div className={cn(s["card-content"])}>
      <div>
        <p className={cn(s["card-content__pretitle"])}>{pretitle}</p>
        <h2 className={cn(s["card-content__headline"])}>{headline}</h2>
        <p className={cn(s["card-content__body-copy"])}>{body}</p>
      </div>
      <figure>
        {imageUrl && (
          <Image
            src={imageUrl}
            width={100}
            height={100}
            layout="responsive"
            alt={imageAlt}
          />
        )}
        {videoUrl && (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={posterUrl}
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
        )}
      </figure>
    </div>
  </li>
);

const Panel: React.FC = () => {
  const cards = [
    {
      id: "card-1",
      pretitle: "01",
      headline: "Multimodal data collection",
      body: "We begin with multimodal data collection, integrating satellite and drone imagery, geospatial layers, IoT devices, and on-ground data to create a comprehensive view of the environment.",
      videoUrl: "/videos/darukaa-hero.mp4",
      altText: "card-three",
      posterUrl: "/images/video-thumbnail.png",
    },
    {
      id: "card-2",
      pretitle: "02",
      headline: "Cutting edge AI-ML technology",
      body: "Our cutting-edge AI technology then processes this data, delivering precise carbon and environmental models that reveal critical insights.",
      imageUrl: "/images/stack-1.jpg",
      altText: "card-two",
    },
    {
      id: "card-3",
      pretitle: "03",
      headline: "Multimodal data collection",
      body: "We begin with multimodal data collection, integrating satellite and drone imagery, geospatial layers, IoT devices, and on-ground data to create a comprehensive view of the environment.",
      imageUrl: "/images/stack-2.jpg",
      altText: "card-one",
    },
    {
      id: "card-4",
      pretitle: "04",
      headline: "Holistic Visualization",
      body: "To make these insights accessible, our holistic visualization simplifies complex data into clear, actionable reports on intuitive dashboards.",
      imageUrl: "/images/stack-7.jpg",
      altText: "card-three",
    },
    {
      id: "card-5",
      pretitle: "05",
      headline: "Integrity is a key",
      body: "Integrity is key, so we use blockchain technology to securely register carbon credits, ensuring they are transparent and traceable.",
      imageUrl: "/images/stack-9.jpg",
      altText: "card-three",
    },
    {
      id: "card-5",
      pretitle: "05",
      headline: "Data Provision for reporting",
      body: "We facilitate regulatory reporting for TNFD, CSRD, and BRSR standards, helping you stay compliant and recognized globally.",
      imageUrl: "/images/stack-8.jpg",
      altText: "card-three",
    },
  ];
  return (
    <main>
      <div className={cn(s["stack-cards__text"], "text-neutral-600")}>
        <p className="pretitle">How we do it</p>
        <p className="h1-md-max md:h1">Services</p>
      </div>
      <ul>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            pretitle={card.pretitle}
            headline={card.headline}
            body={card.body}
            imageUrl={card.imageUrl}
            imageAlt={card.altText}
            videoUrl={card.videoUrl}
            posterUrl={card.posterUrl}
          />
        ))}
      </ul>
    </main>
  );
};

export default Panel;
