import React from "react";
import cn from "classnames";
import s from "./GridCards.module.scss";

interface GridCardProps {
  id: string;
  number: string;
  title: string;
  description?: string;
  backgroundColor: string;
}

const GridCard: React.FC<GridCardProps> = ({
  id,
  number,
  title,
  description,
  backgroundColor,
}) => (
  <div
    className={cn(s["grid-cards__lists--card"])}
    key={id}
    style={{ backgroundColor }}
  >
    <div className={cn(s["grid-cards__lists--card__number"])}>{number}</div>
    <div className={cn(s["grid-cards__lists--card__title"])}>{title}</div>
    {/* {description && (
      <div className={cn(s["grid-cards__lists--card__description"])}>
        {description}
      </div>
    )} */}
  </div>
);

const GridCards: React.FC = () => {
  const cards = [
    {
      id: "card-1",
      number: "01",
      title: "Advisory & Consultancy",
      description:
        "We provide expert guidance to project developers and landowners, ensuring a seamless development and certification process.",
      backgroundColor: "cadetblue",
    },
    {
      id: "card-2",
      number: "02",
      title: "Feasibility Assessments & Project Design",
      description:
        "We provide expert guidance to project developers and landowners, ensuring a seamless development and certification process. ",
      backgroundColor: "hsla(36.158940397350996, 94.97%, 68.82%, 1.00)",
    },
    {
      id: "card-3",
      number: "03",
      title: "Digital MRV & Credit-quality Simulation",
      description:
        "Leveraging state-of-the-art technology, we deliver precise monitoring and maintain high standards in credit quality.",
      backgroundColor: "#32aa8d",
    },
    {
      id: "card-4",
      number: "04",
      title: "Environmental & Climate Modelling",
      description:
        "Through accurate environmental and climate modeling, we identify potential risks and opportunities, enhancing project resilience.",
      backgroundColor: "hsla(165.33333333333331, 46.39%, 80.98%, 1.00)",
    },
    {
      id: "card-5",
      number: "05",
      title: "Biodiversity Monitoring",
      description:
        "We track and monitor biodiversity, promoting conservation and identifying potential co-benefits.",
      backgroundColor: "#e9e9e9",
    },
    {
      id: "card-6",
      number: "06",
      title: "Regulatory Compliance",
      description:
        "We support corporate net-zero initiatives by facilitating accurate and comprehensive environmental reporting.",
      backgroundColor: "#9dbcf2",
    },
  ];

  return (
    <main className={cn(s["grid-cards"])}>
      <div className={cn(s["grid-cards__lists"])}>
        {cards.map((card) => (
          <GridCard
            key={card.id}
            id={card.id}
            number={card.number}
            title={card.title}
            description={card.description}
            backgroundColor={card.backgroundColor}
          />
        ))}
      </div>
      <div className={cn(s["grid-cards__content"], "self-baseline")}>
        <p className={cn(s["grid-cards__content--headline"])}>
          Revalue results
        </p>
        <p className={cn(s["grid-cards__content--body-copy"])}>
          Together our team, tools and approach allow Revalue to achieve results
          well beyond industry standards.
        </p>
      </div>
    </main>
  );
};
export default GridCards;
