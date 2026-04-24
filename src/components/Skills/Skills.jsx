"use client";

import { forwardRef } from "react";
import { skills } from "@/data/skills";
import styles from "./Skills.module.css";

const Skills = forwardRef(function Skills(_, ref) {
  return (
    <section className={styles.skills} id="skills" ref={ref}>
      <div className={styles.skillsContainer}>
        <h2 className={styles.skillsTitle}>Tecnologias</h2>
        <p className={styles.skillsSubtitle}>
          Stack que utilizo nos meus projetos
        </p>

        <div className={styles.categories}>
          {skills.map((group) => (
            <div key={group.category} className={styles.categoryGroup}>
              <span className={styles.categoryLabel}>{group.category}</span>
              <div className={styles.grid}>
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className={styles.card}
                    style={{ "--accent": skill.color }}
                  >
                    <div
                      className={styles.cardC}
                      style={{ backgroundColor: skill.color }}
                    ></div>
                    <span className={styles.cardName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Skills;
