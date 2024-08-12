import Link from "next/link";
import cn from "classnames";
import s from "./Navbar.module.scss";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handliClick = () => {
    setIsOpen(!isOpen);
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
    console.log("Current Section:", currentSection); // Add this line for debugging
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={cn(s["navigation"])}>
      <div className={cn(s['navigation__container'])}>
        <p className={cn(s["navigation__logo"])}>Darukaa Earth</p>
        <div className="block md:hidden">
            <ul>
              <li className="flex items-center justify-center">
              <Link href='/'>Home</Link>
              <Link href='/'>Home</Link>
              <Link href='/'>Home</Link>
              <Link href='/'>Home</Link>
              <Link href='/'>Home</Link>
              </li>
            </ul>
        </div>

        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className={cn(s["navigation__lists"])}>
            {/* <li className={activeSection === "hero" ? s.active : ""}>
              <Link href="/">Home</Link>
              <Link href="#introduction">Introduction</Link>
              <Link href="#what-we-do">What we do</Link>
              <Link href="#services">Services</Link>
              <Link href="#solutions">Solutions</Link>
              <Link href="#about">About us</Link>
            </li> */}
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
            {/* <li className={activeSection === "about" ? s.active : ""}>
              <Link href="#about">About us</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
