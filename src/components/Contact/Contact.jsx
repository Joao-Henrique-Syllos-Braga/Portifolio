"use client";

import { forwardRef } from "react";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import styles from "./Contact.module.css";

const Contact = forwardRef(function Contact(_, ref) {
  return (
    <section className={styles.contact} id="contato" ref={ref}>
      <div className={styles.contactContent}>
        <div className={styles.contactLeft}>
          <span className={styles.contactLabel}>Contato</span>
          <h2 className={styles.contactTitle}>Vamos trabalhar juntos?</h2>
          <p className={styles.contactText}>
            Estou disponível para novos projetos e colaborações.
            Me encontre pelas redes abaixo — será um prazer conversar.
          </p>
        </div>
        <div className={styles.contactRight}>
          <SocialLinks variant="contact" />
        </div>
      </div>
    </section>
  );
});

export default Contact;
