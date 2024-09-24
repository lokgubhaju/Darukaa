import React from "react";
import cn from "classnames";
import s from "./BentoCards.module.scss";
import Image from "next/image";

interface BentoCardProps {
  id: string;
  title: string;
  body: string;
  backgroundColor: string;
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
    <div className={cn(s["bento-cards__lists--card__title"])}>{title}</div>
    <div className={cn(s["bento-cards__lists--card__body"])}>{body}</div>
    {image && (
      <Image
        src={image}
        width={100}
        height={100}
        layout="responsive"
        alt={imageAlt ? imageAlt : ""}
        className="absolute left-0 bottom-0"
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
      image: "/images/data-security.jpg",
      imageAlt: "picture of data security",
      size: 3,
    },
    {
      id: "card-2",
      number: "02",
      title: "Feasibility Assessments & Project Design",
      body: "We provide expert guidance to project developers and landowners, ensuring a seamless development and certification process. ",
      backgroundColor: "rgb(12 12 14/var(--tw-bg-opacity))",
      image: "/images/python.jpg",
      imageAlt: "Image of python",
      size: 3,
    },
    {
      id: "card-3",
      number: "03",
      title: "Digital MRV & Credit-quality Simulation",
      body: "Leveraging state-of-the-art technology, we deliver precise monitoring and maintain high standards in credit quality.",
      backgroundColor: "rgb(12 12 14/var(--tw-bg-opacity))",
      video: "/videos/infinity.mp4",
      posterImage: "/images/infinity.png",
      size: 6,
    },
    {
      id: "card-4",
      number: "04",
      title: "Environmental & Climate Modelling",
      body: "Through accurate environmental and climate modeling, we identify potential risks and opportunities, enhancing project resilience.",
      backgroundColor: "rgb(12 12 14/var(--tw-bg-opacity))",
      size: 6,
      video: "/videos/cloud.mp4",
      posterImage: "/images/cloud.png",
    },
    {
      id: "card-5",
      number: "05",
      title: "Biodiversity Monitoring",
      body: "We track and monitor biodiversity, promoting conservation and identifying potential co-benefits.",
      backgroundColor: "rgb(12 12 14/var(--tw-bg-opacity))",
      image: "/images/stack.jpg",
      imageAlt: "Image of stack",
      size: 3,
    },
    {
      id: "card-6",
      number: "06",
      title: "Regulatory Compliance",
      body: "We support corporate net-zero initiatives by facilitating accurate and comprehensive environmental reporting.",
      backgroundColor: "rgb(12 12 14/var(--tw-bg-opacity))",
      image: "/images/status.jpg",
      imageAlt: "Image of status",
      size: 3,
    },
  ];

  return (
    <main className={(s["bento-cards"], "container")}>
      <h1 className="text-center text-h1-md-max md:text-h1">
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
            video={card?.video}
            posterImage={card?.posterImage}
            size={card.size}
            backgroundColor={card.backgroundColor}
          />
        ))}
      </div>
    </main>
  );
};

export default BentoCards;
