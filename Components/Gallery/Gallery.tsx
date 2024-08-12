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
  imageUrl: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  id,
  headline,
  subheadline,
  list1,
  list2,
  imageUrl,
}) => (
  <div className={cn(s["gallery-container__card"])} key={id}>
    <Image
      src={imageUrl}
      alt=""
      width={100}
      height={100}
      layout="responsive"
      className="rounded-20 overflow-hidden"
    />
    <h1
      className={cn(
        s["gallery-container__card--headline"],
        "text-h1-md-max md:text-h1"
      )}
    >
      {headline}
    </h1>
    <p
      className={cn(
        s["gallery-container__card--subheadline"]
      )}
    >
      {subheadline}
    </p>
    <li
      className={cn(
        s["gallery-container__card--list"]
      )}
    >
      {list1}
    </li>
    <li
      className={cn(
        s["gallery-container__card--list"]
      )}
    >
      {list2}
    </li>
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
      imageUrl: "/images/intro.jpg",
    },
    {
      id: "card-2",
      headline: "2x",
      subheadline: "Global tree cover loss/year has doubled in two decades.",
      list1: "Global carbon credits market projected to grow at 31%+ CAGR.",
      list2: "$2 Trillion worth of Carbon credits opportunities.",
      imageUrl: "/images/intro.jpg",
    },
    {
      id: "card-3",
      headline: "50,000+",
      subheadline:
        "Companies need to report impact on the Environment and Biodiversity : CSRD",
      list1: "Global tree cover loss/year has doubled in two decades.",
      list2:
        "80% of asset owners globally integrate ESG factors into their investment decisions.",
      imageUrl: "/images/intro.jpg",
    },
  ];

  return (
    <main className={cn(s["gallery"])}>
      <h1 className="h1-md-max md:h1 text-black mb-4 md:mb-10">Why it matters?</h1>
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
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </main>
  );
};

export default GalleryCards;
