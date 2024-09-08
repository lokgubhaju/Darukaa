import { useEffect, useState } from "react";
import s from "./BackToTop.module.scss";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export default function BackToTop() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  }, []);

  return (
    <div
      id="scroll-to-top"
      className={cn(s["back-to-top"], "flex justify-center items-center", {
        [s["back-to-top__active"]]: isActive,
      })}
      onClick={scrollToTop}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </div>
  );
}
