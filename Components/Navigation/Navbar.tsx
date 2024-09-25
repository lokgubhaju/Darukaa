import Link from "next/link";
import cn from "classnames";
import s from "./Navbar.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import MobileNavigation from "./MobileNavigation";
import { useMobile } from "../../hooks/use-mobile";

export default function Navbar() {
  const { isMobile } = useMobile()

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

  const menu = [
    { title: "Home", link: "/", id: "home" },
    { title: "Solutions", link: "#solutions", id: "solutions" },
    { title: "Approach", link: "#approach", id: "approach" },
    { title: "Strengths", link: "#strengths", id: "strengths" },
    { title: "Get in touch", link: "#contact", id: "contact" },
  ];

  return (
    <nav className={cn(s["navigation"])}>
      {isMobile ? (
        <div className={cn(s["navigation__mobile"])}>
          <MobileNavigation />
        </div>
      ) : (
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
            {menu.map((item, index) => (
              <li
                className={activeSection === item.id ? s.active : ""}
                key={index}
              >
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
