"use client";

import { forwardRef } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import styles from "./ProjectCarousel.module.css";

const ProjectCarousel = forwardRef(function ProjectCarousel(_, ref) {
  return (
    <section className={styles.projects} id="projetos" ref={ref}>
      <div className={styles.projectsContainer}>
        <h2 className={styles.projectsTitle}>Projetos</h2>
        <p className={styles.projectsSubtitle}>Alguns trabalhos que desenvolvi</p>
        <div className={styles.projectsCounter}>
          <span className={styles.projectsCounterTotal}>{projects.length}</span>
        </div>
    
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
});

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageWrapper}>
        <Image
          className={styles.cardImage}
          src={project.image}
          alt={`Projeto ${project.title}`}
          width={800}
          height={450}
        />
        <div className={styles.cardOverlay}>
          <a className={styles.cardBtn} href={project.link} target="_blank" rel="noopener noreferrer">
            Ver Projeto →
          </a>
        </div>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>
        <div className={styles.cardTags}>
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className={styles.cardTag}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCarousel;
