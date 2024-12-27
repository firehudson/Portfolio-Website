import React from "react";
import { Card } from "components/Card";
import { projectData } from "projects/projectsData";
import styles from "./Project.module.css";
import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';
import { Footer } from "components/Footer";

export default function Project() {
  return (
    <div className={styles.Project}>
      <Heading className={styles.title} level={4} >
        <DecoderText text="Projects" delay={500} />
      </Heading>
      <div className={styles.cardContent}>
        {projectData.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            role={project.role}
            imageUrl={project.imageUrl}
            brief={project.brief}
          />
        ))}
      </div>
      <Footer />
    </div>

  );
}

