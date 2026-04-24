"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import styles from "./avb.module.css";

export default function AvbPage() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!window.emailjs || !formRef.current) return;

    window.emailjs
      .sendForm("service_rbatcd9", "template_kic3eka", formRef.current)
      .then(() => {
        setStatus("Mensagem enviada!");
      })
      .catch(() => {
        setStatus("Erro ao enviar.");
      });
  };

  return (
    <div className={styles.page}>
      <Script
        src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"
        onLoad={() => {
          if (window.emailjs) {
            window.emailjs.init("1oUd39AU8gAf2JtbL");
          }
        }}
      />

      <nav className={styles.navBar}>
        <div className={styles.navBarLinks}>
          <a href="#sobre">Sobre Nós</a>
          <a href="#destaques">Destaques</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <section className={styles.homePage}>
        <section className={styles.home}>
          <div className={styles.homeTextContainer}>
            <div className={styles.homeText}>
              <h1>AVB</h1>
              <p>
                Lorem Ipsum é simplesmente uma simulação de texto da indústria
                tipográfica e de impressos, e vem sendo utilizado desde o século
                XVI, quando um impressor desconhecido pegou uma bandeja de tipos
                e os embaralhou para fazer
              </p>
              <button>Contatar</button>
            </div>
          </div>
        </section>

        <div className={styles.hr}>
          <div className={styles.hrAzul}></div>
          <div className={styles.hrVermelho}></div>
        </div>

        <div className={styles.containerBoxes}>
          <div className={styles.containerBox}>
            <div className={styles.boxText}>
              <h1>Horário de Visitação</h1>
              <p>
                Sábados - Domingos :<br />
                08:00 - 16:00
              </p>
            </div>
            <i className="bi bi-clock"></i>
          </div>
          <div className={styles.containerBox}>
            <div className={styles.boxText}>
              <h1>Endereço</h1>
              <p>
                Moeda
                <br />
                Sítio Cantinho do Céu
              </p>
            </div>
            <i className="bi bi-map"></i>
          </div>
        </div>
      </section>

      <section className={styles.sobre} id="sobre">
        <div className={styles.sobreContainer}>
          <h1>Sobre Nós</h1>
          <p>
            Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um
            texto randômico. Com mais de 2000 anos, suas raízes podem ser
            encontradas em uma obra de literatura latina clássica datada de 45
            AC. Richard McClintock, um professor de latim do Hampden-Sydney
            College na Virginia, pesquisou uma das mais obscuras palavras em
            latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e,
            procurando por entre citações da palavra na literatura clássica,
            descobriu a sua indubitável origem. Lorem Ipsum vem das seções
            1.10.32 e 1.10.33 do &quot;de Finibus Bonorum et Malorum&quot; (Os
            Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é
            um tratado de teoria da ética muito popular na época da Renascença. A
            primeira linha de Lorem Ipsum, &quot;Lorem Ipsum dolor sit
            amet...&quot; vem de uma linha na seção 1.10.32.
          </p>
          <p>
            Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um
            texto randômico. Com mais de 2000 anos, suas raízes podem ser
            encontradas em uma obra de literatura latina clássica datada de 45
            AC. Richard McClintock, um professor de latim do Hampden-Sydney
            College na Virginia, pesquisou uma das mais obscuras palavras em
            latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e,
            procurando por entre citações da palavra na literatura clássica,
            descobriu a sua indubitável origem. Lorem Ipsum vem das seções
            1.10.32 e 1.10.33 do &quot;de Finibus Bonorum et Malorum&quot; (Os
            Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é
            um tratado de teoria da ética muito popular na época da Renascença. A
            primeira linha de Lorem Ipsum, &quot;Lorem Ipsum dolor sit
            amet...&quot; vem de uma linha na seção 1.10.32.
          </p>
        </div>
      </section>

      <section className={styles.bois} id="destaques">
        <section className={`${styles.boi} ${styles.boiFirst}`}>
          <Image
            src="/images/avb/boi-ex.jpg"
            alt="Boi Fortuna"
            width={400}
            height={300}
          />
          <div className={`${styles.boiText} ${styles.boiTextFirst}`}>
            <h1>Fortuna</h1>
            <p>
              O trecho padrão original de Lorem Ipsum, usado desde o século XVI,
              está reproduzido abaixo para os interessados. Seções 1.10.32 e
              1.10.33 de &quot;de Finibus Bonorum et Malorum&quot; de Cicero
              também foram reproduzidas abaixo em sua forma exata original,
              acompanhada das versões para o inglês da tradução feita por H.
              Rackham em 1914.
            </p>
          </div>
        </section>

        <section className={styles.boi}>
          <div className={styles.boiText}>
            <h1>Fortuna</h1>
            <p>
              O trecho padrão original de Lorem Ipsum, usado desde o século XVI,
              está reproduzido abaixo para os interessados. Seções 1.10.32 e
              1.10.33 de &quot;de Finibus Bonorum et Malorum&quot; de Cicero
              também foram reproduzidas abaixo em sua forma exata original,
              acompanhada das versões para o inglês da tradução feita por H.
              Rackham em 1914.
            </p>
          </div>
          <Image
            src="/images/avb/boi-ex.jpg"
            alt="Boi Fortuna"
            width={400}
            height={300}
          />
        </section>
      </section>

      <section className={styles.contato} id="contato">
        <h1>Contate-me</h1>
        <div className={styles.whatsappBox}>
          <div className={styles.whatsappText}>
            <h2>WhatsApp</h2>
            <p>+11930301092</p>
          </div>
          <i className="bi bi-whatsapp"></i>
        </div>

        <form
          ref={formRef}
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="Digite seu nome" required />
          <input type="email" name="email" placeholder="Digite seu email" required />
          <textarea
            cols={30}
            rows={10}
            name="message"
            placeholder="Digite sua mensagem"
            required
          />
          <button className={styles.formButton} type="submit">
            ENVIAR
          </button>
        </form>
        <p className={styles.status}>{status}</p>
      </section>
    </div>
  );
}
