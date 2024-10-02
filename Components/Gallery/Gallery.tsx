import cn from "classnames";
import s from "./Gallery.module.scss";
import Image from "next/image";
import React from "react";
import { decode } from "he";
interface GalleryCardProps {
  id: string;
  headline: string;
  subheadline?: string;
  list1?: string;
  list2?: string;
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
      <div className={cn(s["gallery-container__card--asset"])} >
        <Image
          src={imageUrl}
          alt=""
          width={100}
          height={100}
          layout="responsive"
          className="rounded-20 overflow-hidden"
        />
        <h1 className={cn(s["gallery-container__card--asset--headline"])}>
          {decode(headline)}
        </h1>
      </div>
    )}

    {videoUrl && (
      <div className={cn(s["gallery-container__card--asset"])} >
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
        <h1 className={cn(s["gallery-container__card--asset--headline"])}>
          {decode(headline)}
        </h1>
      </div>
    )}
    {/* <p className={cn(s["gallery-container__card--subheadline"])}>
      {subheadline}
    </p>
    <li className={cn(s["gallery-container__card--list"])}>{list1}</li>
    <li className={cn(s["gallery-container__card--list"])}>{list2}</li> */}
  </div>
);

const GalleryCards: React.FC = () => {
  const cards = [
    {
      id: "card-1",
      headline: `In Hindu mythology, Darukaa [Pronounced /De-ru-ka] is Lord Krishna&rsquo;s skilled charioteer in the Mahabharata. 
        The name also signifies &#8217;Daruka-vana,&rsquo; a sacred forest (in Sanskrit) mentioned in the Shiv Purana, later known as Dwarka—Lord Krishna&rsquo;s home.Our name Darukaa.Earth - is drawn from this rich symbolism; signifying our mission to serve as a conduit for a thriving, sustainable & greener world.`,
      // subheadline: "Average Decline in wildlife over past 50 years.",
      // list1: "Over 1 million species face extinction due to habitat loss.",
      // list2:
      //   "$700 Billion per year required by 2030 to effectively conserve biodiversity.",
      videoUrl: "/images/slider/slider_1.mp4",
      posterUrl: "/images/slider/slider_1.jpg",
    },
    {
      id: "card-2",
      headline: `Our mission is to drive radical transparency in nature-based finance,
          fostering a sustainable future while empowering local communities to
          take charge of climate and biodiversity solutions.`,
      // subheadline: "Global tree cover loss/year has doubled in two decades.",
      // list1: "Global carbon credits market projected to grow at 31%+ CAGR.",
      // list2: "$2 Trillion worth of Carbon credits opportunities.",
      imageUrl: "/images/slider/slider_2.jpg",
    },
  ];

  return (
    <main className={cn(s["gallery"])}>
      {/* <h1 className="h1-md-max md:h1 text-black mb-4 md:mb-10">
        Why it matters?
      </h1> */}
      <div className={cn(s["gallery-container"])}>
        {cards.map((card) => (
          <GalleryCard
            key={card.id}
            id={card.id}
            headline={card.headline}
            // subheadline={card?.subheadline}
            // list1={card?.list1}
            // list2={card?.list2}
            imageUrl={card.imageUrl}
            videoUrl={card.videoUrl}
            // posterUrl={card.posterUrl}
          />
        ))}
      </div>
    </main>
  );
};

export default GalleryCards;
