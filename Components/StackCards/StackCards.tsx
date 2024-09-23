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
      headline: "Holistic Ecosystems & Biodiversity Focus",
      body: "Darukaa Earth goes beyond traditional carbon projects by creating biodiversity credits and taking a holistic approach that restores entire ecosystems, integrating biodiversity, soil health, and ecosystem services into every project.",
      // videoUrl: "/videos/darukaa-hero.mp4",
      altText: "card-three",
      imageUrl: "/images/multimodal-data.gif",
    },
    {
      id: "card-2",
      pretitle: "02",
      headline: "Digital tracking vs ground tracking",
      body: "Darukaa Earth uses advanced digital tools, including satellite, UAV, and IoT sensors, enabling continuous and precise biodiversity tracking and project outcomes, instead of relying solely on manual, ground-based methods.",
      videoUrl: "/videos/cutting-edge-ai.mp4",
      posterUrl: "/images/cutting-edge-ai.png",
      altText: "card-two",
    },
    {
      id: "card-3",
      pretitle: "03",
      headline: "Advanced AI & Technology vs. Traditional Methods",
      body: "Darukaa Earth uses cutting-edge AI, drone technology, and machine learning for wildlife detection, forest monitoring, and ecosystem health assessments, providing far more accurate and real-time data.",
      videoUrl: "/videos/holistic-view.mp4",
      posterUrl: "/images/holistic-view.png",
      altText: "card-three",
    },
    {
      id: "card-4",
      pretitle: "04",
      headline: "Nature-Based Solutions vs. Conventional Industrial Approaches",
      body: "Darukaa prioritizes nature-based solutions like mangrove reforestation and agroforestry, leading to stronger, more sustainable ecological restoration.",
      imageUrl: "/images/integrity-blockchain.gif",
      altText: "card-three",
    },
    {
      id: "card-5",
      pretitle: "05",
      headline: "Community Empowerment vs. Top-Down Approaches",
      body: "Darukaa Earth actively involves local communities in environmental monitoring, creating sustainable livelihoods and ensuring long-term project sustainability through on-ground engagement.",
      videoUrl: "/videos/data-provision.mp4",
      posterUrl: '/images/data-provision.png',
      altText: "card-three",
    },
    {
      id: "card-6",
      pretitle: "06",
      headline: "Scalable & Sustainable vs. Short-Term Focus",
      body: "Darukaa Earth designs projects for long-term scalability and sustainability, ensuring lasting environmental and social impact.",
      videoUrl: "/videos/data-provision.mp4",
      posterUrl: '/images/data-provision.png',
      altText: "card-three",
    },
  ];
  return (
    <main>
      <div className={cn(s["stack-cards__text"], "text-neutral-600")}>
        <p className="h1-md-max md:h1">Our Unmatched Edge</p>
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
            videoUrl={card?.videoUrl}
            posterUrl={card?.posterUrl}
          />
        ))}
      </ul>
    </main>
  );
};

export default Panel;
