import cn from "classnames";
import s from "./Gallery.module.scss";
import Image from "next/image";
import React from "react";
interface GalleryCardProps {
  id: string;
  headline: string;
  subheadline: string;
  list1: string;
  list2: string;
  imageUrl?: string;
  videoUrl?: string;
  posterUrl?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  id,
  headline,
  subheadline,
  list1,
  list2,
  imageUrl,
  videoUrl,
  posterUrl,
}) => (
  <div className={cn(s["gallery-container__card"])} key={id}>
    {imageUrl && (
      <Image
        src={imageUrl}
        alt=""
        width={100}
        height={100}
        layout="responsive"
        className="rounded-20 overflow-hidden"
      />
    )}

    {videoUrl && (
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={posterUrl}
        className="rounded-20 overflow-hidden"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    )}
    <h1
      className={cn(
        s["gallery-container__card--headline"],
        "text-h1-md-max md:text-h1"
      )}
    >
      {headline}
    </h1>
    <p className={cn(s["gallery-container__card--subheadline"])}>
      {subheadline}
    </p>
    <li className={cn(s["gallery-container__card--list"])}>{list1}</li>
    <li className={cn(s["gallery-container__card--list"])}>{list2}</li>
  </div>
);

const GalleryCards: React.FC = () => {
  const cards = [
    {
      id: "card-1",
      headline: "69%",
      subheadline: "Average Decline in wildlife over past 50 years.",
      list1: "Over 1 million species face extinction due to habitat loss.",
      list2:
        "$700 Billion per year required by 2030 to effectively conserve biodiversity.",
      videoUrl: "/videos/wildlife-loss.mp4",
      posterUrl: "/images/wildlife-loss.png"
    },
    {
      id: "card-2",
      headline: "2x",
      subheadline: "Global tree cover loss/year has doubled in two decades.",
      list1: "Global carbon credits market projected to grow at 31%+ CAGR.",
      list2: "$2 Trillion worth of Carbon credits opportunities.",
      videoUrl: "/videos/2x-tree-loss.mp4",
      posterUrl: "/images/tree-loss.png"
    },
    {
      id: "card-3",
      headline: "50,000+",
      subheadline:
        "Companies need to report impact on the Environment and Biodiversity : CSRD",
      list1: "Global tree cover loss/year has doubled in two decades.",
      list2:
        "80% of asset owners globally integrate ESG factors into their investment decisions.",
      videoUrl: "/videos/50000-companies.mp4",
      posterUrl: "/images/companies.png"
    },
  ];

  return (
    <main className={cn(s["gallery"])}>
      <h1 className="h1-md-max md:h1 text-black mb-4 md:mb-10">
        Why it matters?
      </h1>
      <div
        className={cn(s["gallery-container"])}
        style={{ backgroundImage: "/images/intro.jpg" }}
      >
        {cards.map((card) => (
          <GalleryCard
            key={card.id}
            id={card.id}
            headline={card.headline}
            subheadline={card.subheadline}
            list1={card.list1}
            list2={card.list2}
            // imageUrl={card.imageUrl}
            videoUrl={card.videoUrl}
            // posterUrl={card.posterUrl}
          />
        ))}
      </div>
    </main>
  );
};

export default GalleryCards;
