import Link from "next/link";
import cn from "classnames";
import s from "./Navbar.module.scss";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import Logo from "@/public/Logo";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";
import Image from "next/image";
import MobileNavigation from "./MobileNavigation";

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

  const menu = ["Home", "Introduction", "What we do", "Services", "Solutions"];

  return (
    <nav className={cn(s["navigation"])}>
      <div className={cn(s["navigation__mobile"])}>
        <MobileNavigation />
      </div>

      <div className={cn(s["navigation__desktop"])} id="navbar-default">
        {/* <Logo />  */}
        <Image
          src={"/images/logo.png"}
          alt="Logo of Darukaa"
          width={200}
          height={40}
          className="h-10"
        />
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
    </nav>
  );
}
