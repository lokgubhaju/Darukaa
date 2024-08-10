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
    const sections = document.querySelectorAll('section');
    let currentSection:any = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 2) {
        currentSection = section.getAttribute('id');
      }
    });
    console.log('Current Section:', currentSection); // Add this line for debugging
    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={cn(s["navigation"])}>
      <p className={cn(s["navigation__logo"], 'items-center flex text-black')}>Darukaa Earth</p>
      <div
        className={cn(s["mobile-navigation"], "block md:hidden")}
        onClick={handliClick}
      >
        <span className={s.bar}>Home</span>
        <span className={s.bar}>Introduction</span>
        <span className={s.bar}>Services</span>
      </div>
      <ul className={cn(s["navigation__lists"], "hidden md:block")}>
        <li className={activeSection === 'home' ? s.active : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={activeSection === 'introduction' ? s.active : ''}>
          <Link href="#introduction">Introduction</Link>
        </li>
        <li className={activeSection === 'services' ? s.active : ''}>
          <Link href="#services">Services</Link>
        </li>
        <li className={activeSection === 'contact' ? s.active : ''}>
          <Link href="#contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}
