import { useState } from "react";
import s from "./MobileNavigation.module.scss";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menu = [
    {
      title: "Home",
      link: "/",
    },
    { title: "Solutions", link: "#solutions", id: "solutions" },
    { title: "Approach", link: "#approach", id: "approach" },
    { title: "Strengths", link: "#strengths", id: "strengths" },
    { title: "Get in touch", link: "#contact", id: "contact" },
  ];
  return (
    <div className={cn(s["mobile-navigation"])}>
      <Link href="#info">
      <Image
        src={"/images/logo_mobile.png"}
        alt="Logo of Darukaa"
        width={60}
        height={60}
      />
      
      </Link>
      <div
        className={cn(s["hamburger-icon"], {
          [s["hamburger-icon__active"]]: isOpen,
        })}
        onClick={toggleMenu}
      >
        <div className={cn(s["hamburger-icon__line"])}></div>
        <div className={cn(s["hamburger-icon__line"])}></div>
        <div className={cn(s["hamburger-icon__line"])}></div>
      </div>
      <div
        className={cn(s["mobile-navigation__menu"], {
          [s["mobile-navigation__menu__active"]]: isOpen,
        })}
      >
        {menu.map((item, index) => (
          <li key={index}>
            <Link href={item.link} onClick={toggleMenu}>
              {item.title}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
