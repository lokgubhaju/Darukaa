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
    className={cn(
      s["grid-cards__lists--card"],
      "flex flex-col justify-between"
    )}
    key={id}
    style={{ backgroundColor }}
  >
    <div className={cn(s["grid-cards__lists--card__number"])}>{number}</div>
    <div className={cn(s["grid-cards__lists--card__title"])}>{title}</div>
    {description && (
      <div className={cn(s["grid-cards__lists--card__description"])}>
        {description}
      </div>
    )}
  </div>
);

const GridCards: React.FC = () => {
  const cards = [
    {
      id: "card-1",
      number: "01",
      title: "Advisory & Consultancy",
      backgroundColor: "cadetblue",
    },
    {
      id: "card-2",
      number: "02",
      title: "Feasibility Assessments",
      backgroundColor: "blue",
    },
    {
      id: "card-3",
      number: "03",
      title: "Project Design",
      backgroundColor: "forestgreen",
    },
    {
      id: "card-4",
      number: "04",
      title: "Digital MRV",
      backgroundColor: "orange",
    },
    {
      id: "card-5",
      number: "05",
      title: "Carbon Credit Simulation",
      backgroundColor: "purple",
    },
    {
      id: "card-6",
      number: "06",
      title: "Environmental Monitoring",
      backgroundColor: "forestgreen",
    },
    {
      id: "card-7",
      number: "07",
      title: "Climate Modelling",
      backgroundColor: "orange",
    },
    {
      id: "card-8",
      number: "08",
      title: "Regulatory Compliance ",
      backgroundColor: "yellow",
    },
  ];

  return (
    <main
      className={cn(
        s["grid-cards"],
        "flex flex-col-reverse md:flex-row p-4 md:p-20 h-full gap-8 bg-white text-black"
      )}
    >
      <div className={cn(s["grid-cards__lists"])}>
        {cards.map((card) => (
          <GridCard
            key={card.id}
            id={card.id}
            number={card.number}
            title={card.title}
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
