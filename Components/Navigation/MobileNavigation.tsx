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
    { title: "Services", link: "#services" },
    { title: "Solution", link: "#solutions" },
    { title: "Contact us", link: "#contact" },
  ];
  return (
    <div className={cn(s["mobile-navigation"])}>
      <Image
        src={"/images/logo_mobile.png"}
        alt="Logo of Darukaa"
        width={60}
        height={60}
      />
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
          <div className={cn(s["mobile-navigation__menu--item"])} key={index}>
            <Link href={item.link} onClick={toggleMenu}>
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;
