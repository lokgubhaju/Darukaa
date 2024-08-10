import React, { useEffect } from "react";
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
  <li className={cn(s.card)} id={id}>
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
      body: "integrating different sources of data such as satellite & drone data, geospatial layers, IoT devices and ground collected data ",
      imageUrl: "/images/how_we_do_it_1.jpg",
      altText: "card-one",
    },
    {
      id: "card-2",
      pretitle: "02",
      headline: "Cutting edge AI-ML technology",
      body: "Precise carbon and environmental modelling ",
      imageUrl: "/images/how_we_do_it_2.jpg",
      altText: "card-two",
    },
    {
      id: "card-3",
      pretitle: "03",
      headline: "Blockchain Technology",
      body: "the credits are registered on blockchain to ensure high integrity",
      videoUrl: "/videos/one.mp4",
      altText: "card-three",
      posterUrl: "/images/video-thumbnail.png",
    },
    {
      id: "card-4",
      pretitle: "04",
      headline: "Holistic Visualization",
      body: "view simplified and actionable insights on reporting dashboards",
      imageUrl: "/images/how_we_do_it_3.jpg",
      altText: "card-three",
    },
    {
      id: "card-5",
      pretitle: "05",
      headline: "Data Provision for reporting",
      body: "compiling data for reporting standards like TNFD, CSRD and BRSR",
      imageUrl: "/images/how_we_do_it_1.jpg",
      altText: "card-three",
    },
    // Add more cards as needed
  ];
  return (
    <main>
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
