import React, { useState } from "react";
import cn from "classnames";
import s from "./BentoCards.module.scss";
import Image from "next/image";
import Plus from "../Plus";
import CloseIcon from "../CloseIcon";

interface BentoCardProps {
  id: string;
  title: string;
  body: string;
  backBody?: string;
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
  backBody,
  backgroundColor,
  image,
  imageAlt,
  video,
  posterImage,
  size,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div
      className={cn(
        s["bento-cards__lists--card"],
        s[`bento-cards__lists--card-${size}`],
        { [s["flipped"]]: isFlipped }
      )}
      key={id}
      style={{ backgroundColor }}
      onClick={handleFlip}
    >
      <div className={s["bento-card__inner"]}>
        {/* Front side */}
        <div
          className={cn(s["bento-card__front"], { [s["hidden"]]: isFlipped })}
        >
          <div className={cn(s["bento-cards__lists--card__text"])}>
            <div className={cn(s["bento-cards__lists--card__text-title"])}>
              {title}
            </div>
            <div className={cn(s["bento-cards__lists--card__text-body"])}>
              {body}
            </div>
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
          <div className={cn(s["bento-cards__front--icon"])}>
            <Plus />
          </div>
        </div>
        {/* Back side */}
        {backBody && (
          <div
            className={cn(s["bento-card__back"], { [s["hidden"]]: !isFlipped })}
            style={{ backgroundColor }}
          >
            <div className={cn(s["bento-cards__lists--card__back-body"])}>
              {backBody}
            </div>
            <div className={cn(s["bento-cards__back--icon"])}>
              <CloseIcon />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const BentoCards: React.FC = () => {
  const cards = [
    {
      id: "card-1",
      number: "01",
      title: "Advisory & Consultancy",
      body: "Expert guidance to project developers and investors, ensuring alignment with global standards and long-term success.",
      backBody:
        "We provide specialized guidance to both project developers and investors, ensuring they navigate the complexities of carbon and biodiversity projects with precision. Our services include advising on the selection of the most appropriate methodologies for nature based projects, and the development of biodiversity credits. We also offer strategic insights into optimizing project timelines, risk management, and stakeholder engagement, ensuring long-term project success. Our tailored consultancy ensures that investments are aligned with international best practices and contribute meaningfully to global climate and biodiversity targets.",
      backgroundColor: "gray",
      image: "/images/bento/advisory-and-consultancy.jpg",
      imageAlt: "image of Advisory & Consultancy",
      size: 3,
    },
    {
      id: "card-2",
      number: "02",
      title: "Feasibility Assessments & Project Design",
      body: "Using spatial data to assess project viability and create detailed design documents for certification.",
      backBody:
        "Leveraging advanced spatial analysis and remote sensing, we conduct comprehensive feasibility assessments to determine the viability of carbon and biodiversity projects. Our assessments include detailed land-use analysis, carbon stock estimation, and habitat suitability modelling. We also create Project Design Documents (PDDs) tailored to meet the stringent requirements of leading carbon standards. Our expertise ensures that projects are scientifically robust, scalable, and ready for certification and credit issuance.",
      backgroundColor: "gray",
      image: "/images/bento/feasibility-assessments.jpg",
      imageAlt: "Image of Feasibility Assessments & Project Design",
      size: 3,
    },
    {
      id: "card-3",
      number: "03",
      title: "Digital MRV & Credit-quality Simulation",
      body: "Real-time monitoring and predictive simulations to ensure high-quality credits.",
      backBody:
        "We utilize advanced digital tools for MRV, integrating satellite imagery, UAV data, and IoT sensors to provide real-time, high-resolution data on carbon sequestration, deforestation, and biodiversity metrics. Our AI-driven simulations predict credit yields and environmental impacts, while our holistic dashboard offers transparent, real-time insights for credible reporting and sustainable outcomes.",
      image: "/images/bento/digital-MRV.jpg",
      imageAlt: "Image of Digital MRV & Credit-quality Simulation",
      size: 6,
      backgroundColor: "gray",
    },
    {
      id: "card-4",
      number: "04",
      title: "Environmental & Climate Modelling",
      body: "Advanced models to predict ecosystem changes and guide climate mitigation strategies.",
      backBody:
        "Our environmental and climate modelling services utilize state-of-the-art tools such as General Circulation Models (GCMs) to provide precise predictions on ecosystem changes, carbon flux, and climate impacts. These models help in assessing risks, guiding mitigation strategies, and planning adaptive measures for both carbon projects and biodiversity conservation efforts. Our data-driven insights are vital for long-term environmental sustainability.",
      backgroundColor: "gray",
      size: 6,
      image: "/images/bento/environmental-climate-modelling.jpg",
      imageAlt: "image of Environmental & Climate Modelling",
    },
    {
      id: "card-5",
      number: "05",
      title: "Biodiversity Monitoring",
      body: "AI-driven tools to track species and habitats, supporting conservation and biodiversity credit initiatives.",
      backBody:
        "AI-driven tools to track species and habitats, supporting conservation and biodiversity credit initiatives.",
      backgroundColor: "gray",
      image: "/images/bento/biodiversity-monitoring.jpg",
      imageAlt: "Image of bio-diversity monitoring",
      size: 3,
    },
    {
      id: "card-6",
      number: "06",
      title: "Regulatory Compliance",
      body: "Reporting for environmental and legal standards.",
      backBody:
        "We assist in navigating complex regulatory landscapes, ensuring that your projects meet all necessary environmental and legal standards such as TNFD, CSRD,etc. Our compliance services safeguard your operations, allowing you to focus on making a positive impact. We also assist corporates with data for their environmental reporting.",
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
            backBody={card.backBody}
            image={card.image}
            imageAlt={card.imageAlt}
            size={card.size}
            backgroundColor={card.backgroundColor}
          />
        ))}
      </div>
    </main>
  );
};

export default BentoCards;
