import cn from "classnames";
import s from "./About.module.scss";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

interface AboutCardProps {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  linkedInUrl?: string;
  facebookUrl?: string;
  gitHubUrl?: string;
  color: string;
}

const AboutCard: React.FC<AboutCardProps> = ({
  id,
  name,
  title,
  imageUrl,
  linkedInUrl,
  facebookUrl,
  gitHubUrl,
  color,
}) => (
  <div
    className={cn(s["about-us__lists--card"])}
    key={id}
    style={{ backgroundColor: color }}
  >
    <h2 className={cn(s["about-us__lists--card__name"])}>{name}</h2>
    <p className={cn(s["about-us__lists--card__title"])}>{title}</p>
    <Image
      src={imageUrl}
      alt=""
      width={290}
      height={435}
      className={cn(s["about-us__lists--card__image"])}
    />
    <div
      className={cn(s["about-us__lists--card__back"])}
    >
      {linkedInUrl && (
        <a href={linkedInUrl}>
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
      )}
      {gitHubUrl && (
        <a href={gitHubUrl}>
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
      )}
      {facebookUrl && (
        <a href={facebookUrl}>
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
      )}
    </div>
  </div>
);

const AboutCards: React.FC = () => {
  const cards = [
    {
      id: "card-1",
      name: "Stuart Rowland",
      title: "Founder & CTO",
      imageUrl: "/images/about/about-1.png",
      linkedInUrl: "https://darukaa.vercel.app/#",
      gitHubUrl: "https://darukaa.vercel.app/#",
      facebookUrl: "https://darukaa.vercel.app/#",
      color: "#fbbf64",
    },
    {
      id: "card-2",
      name: "Kyle Walker",
      title: "Chief Operating Officer",
      imageUrl: "/images/about/about-2.png",
      linkedInUrl: "https://darukaa.vercel.app/#",
      gitHubUrl: "https://darukaa.vercel.app/#",
      facebookUrl: "https://darukaa.vercel.app/#",
      color: "hsla(165.33333333333331, 46.39%, 80.98%, 1.00)",
    },
    {
      id: "card-3",
      name: "Marie Ann",
      title: "Chief Data Analyst",
      imageUrl: "/images/about/about-3.png",
      linkedInUrl: "https://darukaa.vercel.app/#",
      gitHubUrl: "https://github.com/",
      facebookUrl: "https://www.facebook.com/",
      color: "#9dbcf2",
    },
    {
      id: "card-4",
      name: "Nicolas Cage",
      title: "Technical Design Director",
      imageUrl: "/images/about/about-4.png",
      linkedInUrl: "https://darukaa.vercel.app/#",
      gitHubUrl: "https://github.com/lokgubhaju",
      facebookUrl: "https://www.facebook.com/xxxx",
      color: "#e9e9e9",
    },
    {
      id: "card-5",
      name: "Stefan Levi",
      title: "Machine Learning Scientist",
      imageUrl: "/images/about/about-5.png",
      linkedInUrl: "https://darukaa.vercel.app/#",
      gitHubUrl: "https://darukaa.vercel.app/#",
      facebookUrl: "https://darukaa.vercel.app/#",
      color: "hsla(165.33333333333331, 46.39%, 80.98%, 1.00)",
    },
    {
      id: "card-6",
      name: "Sarah Reiter",
      title: "Carbon Technical Associate",
      imageUrl: "/images/about/about-6.png",
      linkedInUrl: "https://darukaa.vercel.app/#",
      gitHubUrl: "https://darukaa.vercel.app/#",
      facebookUrl: "https://darukaa.vercel.app/#",
      color: "#32aa8d",
    },
    {
      id: "card-7",
      name: "Laura Smith",
      title: "Finance Manager",
      imageUrl: "/images/about/about-7.png",
      linkedInUrl: "https://darukaa.vercel.app/#",
      gitHubUrl: "https://darukaa.vercel.app/#",
      facebookUrl: "https://darukaa.vercel.app/#",
      color: "hsla(36.158940397350996, 94.97%, 68.82%, 1.00)",
    },
    {
      id: "card-8",
      name: "Nicolas Cage",
      title: "Technical Design Director",
      imageUrl: "/images/about/about-8.png",
      linkedInUrl: "https://darukaa.vercel.app/#",
      gitHubUrl: "https://darukaa.vercel.app/#",
      facebookUrl: "https://darukaa.vercel.app/#",
      color: "#e9e9e9",
    },
  ];

  return (
    <main>
      <h1 className={cn(s['about-us__headline'], 'text-h1-md-max md:text-h1')}>Meet our team</h1>
      <div className={cn(s["about-us"])}>
        {cards.map((card) => (
          <AboutCard
            key={card.id}
            id={card.id}
            name={card.name}
            title={card.title}
            imageUrl={card.imageUrl}
            color={card.color}
            linkedInUrl={card.linkedInUrl}
            gitHubUrl={card.gitHubUrl}
            facebookUrl={card.facebookUrl}
          />
        ))}
      </div>
    </main>
  );
};

export default AboutCards;
