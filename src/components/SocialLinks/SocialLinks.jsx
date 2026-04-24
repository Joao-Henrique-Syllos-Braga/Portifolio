"use client";

import { socialLinks } from "@/data/socialLinks";
import styles from "./SocialLinks.module.css";

export default function SocialLinks({ variant = "contact" }) {
  return (
    <div className={`${styles.socialLinks} ${styles[variant]}`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.socialLink} ${styles[link.className]}`}
          aria-label={link.name}
        >
          <i className={link.icon} />
          {link.label && <span className={styles.label}>{link.label}</span>}
        </a>
      ))}
    </div>
  );
}
