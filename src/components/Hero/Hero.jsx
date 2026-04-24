"use client";

import { forwardRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = forwardRef(function Hero(_, ref) {
  return (
    <section className={styles.hero} id="home" ref={ref}>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Oi, eu sou o{" "}
            <span className={styles.heroNameHighlight}>JOÃO HENRIQUE</span>
          </h1>
          <p className={styles.heroDesc}>
            &quot;Desenvolvedor em formação, criando soluções modernas para
            &quot;
          </p>
        </div>

        <Image
          className={styles.minhaImagem}
          src="/images/image.png"
          alt="Minha imagem"
          width={500}
          height={500}
          priority
        />
      </div>
    </section>
  );
});

export default Hero;
