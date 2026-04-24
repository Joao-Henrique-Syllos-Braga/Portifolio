"use client";

import { useCallback } from "react";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", target: "#home" },
  { label: "Projetos", target: "#projetos" },
  { label: "Habilidades", target: "#skills" },
  { label: "Contato", target: "#contato" },
];

export default function Navbar({ onNavigate }) {
  const handleClick = useCallback(
    (e, target) => {
      e.preventDefault();
      if (onNavigate) {
        onNavigate(target);
      }
    },
    [onNavigate]
  );

  return (
    <nav className={styles.navBar}>
      <h2 className={styles.company}>João Henrique</h2>

      <div className={styles.navLinksWrapper}>
        {navItems.map((item) => (
          <a
            key={item.target}
            href={item.target}
            className={styles.navLinkItem}
            onClick={(e) => handleClick(e, item.target)}
          >
            {item.label}
          </a>
        ))}
      </div>

    </nav>
  );
}
