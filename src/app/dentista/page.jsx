"use client";

import Image from "next/image";
import styles from "./dentista.module.css";

const services = [
  {
    title: "Limpeza e Prevenção",
    text: "Manutenção essencial para um sorriso saudável.",
    image: "/images/dentista/cards/limpeza.png",
  },
  {
    title: "Clareamento Dental",
    text: "Deixe seus dentes mais brancos em poucas sessões",
    image: "/images/dentista/cards/clareamento.png",
  },
  {
    title: "Ortodontia",
    text: "Aparelhos tradicionais e alinhadores invisiveis",
    image: "/images/dentista/cards/ortodontia.png",
  },
  {
    title: "Implantes Dentários",
    text: "Restaure seu sorriso com segurança e precisão",
    image: "/images/dentista/cards/implantes.png",
  },
  {
    title: "Dentística Estética",
    text: "Facetas, resinas e restaurações estéticas",
    image: "/images/dentista/cards/estetica.png",
  },
  {
    title: "Odontopediatria",
    text: "Cuidado especializado para crianças",
    image: "/images/dentista/cards/pediatria.png",
  },
];

const benefits = [
  { title: "Tecnologia", text: "Moderna", image: "/images/dentista/broca.png" },
  {
    title: "Profissionais",
    text: "especializados",
    image: "/images/dentista/profissional.png",
  },
  {
    title: "Atendimento",
    text: "humanizado",
    image: "/images/dentista/atendimento.png",
  },
  {
    title: "Resultados",
    text: "rápidos e naturais",
    image: "/images/dentista/resultados.png",
  },
];

const testimonials = [
  {
    name: "Mariana R.",
    text: "Melhor atendimento que já tive, profissionais incríveis",
  },
  {
    name: "Carlos L.",
    text: "Meu sorriso mudou completamente, recomendo demais",
  },
  {
    name: "Juliana S.",
    text: "Ambiente ótimo e dentistas muito atencisos",
  },
];

export default function DentistaPage() {
  return (
    <div className={styles.page}>
      <header>
        <nav className={styles.navBar}>
          <ul className={styles.navLinks}>
            <li>
              <a className={styles.navLink} href="#servicos">
                Serviços
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#sobre">
                Quem Somos
              </a>
            </li>
            <li>
              <a className={styles.navLink} href="#agendar">
                Agendar
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroContainer}>
            <div>
              <div className={styles.bolas}>
                <div className={`${styles.bola} ${styles.bola1}`}></div>
                <div className={`${styles.bola} ${styles.bola1}`}></div>
                <div className={`${styles.bola} ${styles.bola1}`}></div>
              </div>
              <h1 className={styles.heroTitle}>
                O SORRISO PERFEITO COMEÇA AQUI!
              </h1>
              <p className={styles.heroText}>
                Tratamentos odontológicos modernos, atendimento humanizado e
                tecnologia de ponta para transformar seu sorriso.
              </p>
            </div>
            <div className={styles.heroLinks}>
              <a className={`${styles.btn} ${styles.btn1}`} href="#agendar">
                Agendar
              </a>
              <a className={`${styles.btn} ${styles.btn2}`} href="#servicos">
                Serviços
              </a>
            </div>
          </div>

          <div className={`${styles.bola} ${styles.circulo3}`}></div>

          <div className={styles.heroImgContainer}>
            <Image
              className={styles.heroImg}
              src="/images/dentista/image.png"
              alt="Imagem Doutora"
              width={400}
              height={600}
            />
            <div className={styles.bolaGrande}></div>
            <div className={`${styles.bola} ${styles.circulo1}`}></div>
            <div className={`${styles.bola} ${styles.circulo2}`}></div>
            <div className={`${styles.bola} ${styles.bola2}`}></div>
            <div className={`${styles.bola} ${styles.circulo2}`}></div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.beneficios}>
          <h1 className={styles.bnefTitle}>
            <span className={styles.bnefHighlight}>BENEFÍCIOS</span> de nossa
            clinica
          </h1>
          <div className={styles.bnefCards}>
            {benefits.map((b) => (
              <div key={b.title} className={styles.bnefCard}>
                <Image
                  className={styles.bnefSvg}
                  src={b.image}
                  alt={b.title}
                  width={80}
                  height={80}
                />
                <div>
                  <h2>{b.title}</h2>
                  <p>{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICOS */}
        <section className={styles.servicos} id="servicos">
          <h1 className={`${styles.srvTitle} ${styles.bnefHighlight}`}>
            SERVIÇOS
          </h1>
          <div className={styles.srvCards}>
            {services.map((s) => (
              <div key={s.title} className={styles.srvCard}>
                <Image
                  className={styles.srvImg}
                  src={s.image}
                  alt={s.title}
                  width={380}
                  height={220}
                />
                <div className={styles.srvCardContainer}>
                  <h2 className={styles.srvCardTitle}>{s.title}</h2>
                  <p>{s.text}</p>
                  <button className={styles.srvCardBtn}>Veja Mais</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SOBRE */}
        <section className={styles.sobre} id="sobre">
          <div className={styles.sobreContainer}>
            <h1>SOBRE NÓS</h1>
            <div>
              <h2 className={styles.sobreTitle}>
                Cuidando de sorrisos com excelência há mais de 10 anos
              </h2>
              <p className={styles.sobreText}>
                Nossa clínica reúne dentistas especializados em diversas áreas,
                equipamentos modernos e um ambiente confortável para oferecer uma
                experiência única. Nosso propósito é transformar a autoestima dos
                pacientes com resultados naturais e duradouros.
              </p>
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className={styles.depoimentos}>
          <h1 className={`${styles.dpTitle} ${styles.bnefTitle}`}>
            <span className={styles.bnefHighlight}>DEPOIMENTOS</span> o que
            nossos pacientes dizem
          </h1>
          <div className={styles.dpCards}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.dpCard}>
                <div className={styles.dpCardContainer}>
                  <h2 className={styles.dpCardTitle}>{t.name}</h2>
                  <p className={styles.dpCardText}>{t.text}</p>
                  <div>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AGENDAR */}
        <section className={styles.agendar} id="agendar">
          <div className={styles.agendarContainer}>
            <h1 className={styles.agendarTitle}>
              PRONTO PARA
              <br />
              TRANSFORMAR SEU
              <br />
              SORRISO?
            </h1>
            <a href="#" className={styles.agendarBtn}>
              AGENDAR
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
