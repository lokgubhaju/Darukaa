import s from "./Footer.module.scss";
import cn from "classnames";

export default function Footer() {
  return (
    <footer className={cn(s["footer"])}>
      Copyright © 2024 Darukaa Earth. All rights reserved.
    </footer>
  );
}
