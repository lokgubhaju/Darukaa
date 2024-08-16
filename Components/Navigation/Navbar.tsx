import Link from "next/link";
import cn from "classnames";
import s from "./Navbar.module.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import Logo from "@/public/Logo";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((open) => !open);
  };

  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection: any = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 10) {
        currentSection = section.getAttribute("id");
      }
    });
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = ['Home', 'Introduction', 'What we do', 'Services', 'Solutions']

  return (
    <nav className={cn(s["navigation"])}>
      <div
        className={cn(
          s["navigation__container"],
          "flex justify-between items-center"
        )}
      >
        <ul className={cn(s["navigation__mobile"])}>
          <div className={cn(s["navigation__mobile-navigation"])}>
            <Image src={"/images/logo.png"} alt="Logo of Darukaa" width={200} height={80} />
            {/* <p className={cn(s["navigation__logo"])}>Darukaa Earth</p> */}
            <li
              className={cn(
                s["navigation-mobile-navigation__toggle"],
                "block md:hidden"
              )}
              onClick={handleClick}
            >
              <FontAwesomeIcon
                icon={isOpen ? faX : faBars}
                size="2x"
                color="black"
              />
            </li>
          </div>
          
          <li
            className={cn(s["navigation-mobile-navigation__lists"], {
              [s["navigation-mobile-navigation__lists--active"]]: isOpen,
            })}
          >
            <ul>
              <li
                className={cn(
                  s["navigation__mobile-navigation__lists-overlay"]
                )}
              >
                {/* <Link href="/" onClick={handleClick} className="text-xl">
                  Home
                </Link>
                <Link
                  href="#introduction"
                  onClick={handleClick}
                  className="text-xl"
                >
                  Introduction
                </Link>
                <Link
                  href="#what-we-do"
                  onClick={handleClick}
                  className="text-xl"
                >
                  What we do
                </Link>
                <Link
                  href="#services"
                  onClick={handleClick}
                  className="text-xl"
                >
                  Services
                </Link>
                <Link
                  href="#solutions"
                  onClick={handleClick}
                  className="text-xl"
                >
                  Solutions
                </Link>
                <Link href="#about" onClick={handleClick} className="text-xl">
                  About us
                </Link> */}
              </li>
            </ul>
          </li>
        </ul>

        <div className={cn(s["navigation__desktop"])} id="navbar-default">
          {/* <Logo />  */}
          <Image src={"/images/logo.png"} alt="Logo of Darukaa" width={200} height={40} className="h-10"/>
          <ul className={cn(s["navigation__lists"])}>
            <li className={activeSection === "hero" ? s.active : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={activeSection === "introduction" ? s.active : ""}>
              <Link href="#introduction">Introduction</Link>
            </li>
            <li className={activeSection === "what-we-do" ? s.active : ""}>
              <Link href="#what-we-do">What we do</Link>
            </li>
            <li className={activeSection === "services" ? s.active : ""}>
              <Link href="#services">Services</Link>
            </li>
            <li className={activeSection === "solutions" ? s.active : ""}>
              <Link href="#solutions">Solutions</Link>
            </li>
            <li className={activeSection === "about" ? s.active : ""}>
              <Link href="#about">About us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
