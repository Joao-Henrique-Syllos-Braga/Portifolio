"use client";

import { forwardRef } from "react";
import styles from "./About.module.css";

const About = forwardRef(function About(_, ref) {
  return (
    <section className={styles.about} ref={ref}>
      <div className={styles.aboutContainer}>
        <h2 className={styles.aboutTitle}>SOBRE MIM</h2>
        <p className={styles.aboutText}>
          Meu nome é <strong>João Henrique</strong> tenho 15 anos, sou um
          desenvolvedor iniciante apaixonado por tecnologia e por criar soluções
          que realmente funcionam. Comecei a estudar programação há{" "}
          <strong>3 anos</strong>, explorando <strong>HTML</strong>,{" "}
          <strong>CSS</strong>, <strong>JavaScript</strong> e{" "}
          <strong>Python</strong>. Hoje, estou expandindo meus conhecimentos em{" "}
          <strong>Java</strong> e <strong>Inteligência Artificial</strong>,
          sempre buscando aprender algo novo. Gosto de transformar ideias em
          projetos reais, experimentar tecnologias diferentes e evoluir a cada
          linha de código. Meu objetivo é me tornar um desenvolvedor completo e
        </p>
      </div>
    </section>
  );
});

export default About;
