import { PDFViewer } from 'components/PDFViewer';
import styles from './Resume.module.css';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Heading } from 'components/Heading';
import { DecoderText } from 'components/DecoderText';
import { Button } from 'components/Button';

export const Resume = () => {
  return (

    <article className={styles.resume}>
      <Meta
        title="Resume"
        description="Skilled in modern web development with expertise in JavaScript, React, CSS, and Node.js. Proficient in building responsive user interfaces and developing efficient backend solutions. Dedicated to delivering high-quality, scalable applications and continuously enhancing technical knowledge."
      />
      <Section className={styles.content}>
        <div className={styles.grid}>
          <Heading level={3} as="h1">
            <DecoderText text="Resume" />
          </Heading>

          <Button href={"https://raw.githubusercontent.com/firehudson/Portfolio-Website/main/src/assets/AdityaVaishnav_Resume.pdf"} target="_self">
            Download CV
          </Button>
        </div>
      </Section>
      <PDFViewer resume={true} pdfLink="https://raw.githubusercontent.com/firehudson/Portfolio-Website/main/src/assets/AdityaVaishnav_Resume.pdf" />
    </article>
  );
};
