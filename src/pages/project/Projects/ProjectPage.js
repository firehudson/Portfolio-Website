import React from "react";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { projectData } from "projects/projectsData";
import styles from "./ProjectPage.module.css";
import { media } from 'utils/style';
import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';
import { Footer } from "components/Footer";
import { Button } from "components/Button";
import { Section } from "components/Section";
import { Meta } from "components/Meta";
export default function ProjectPage({ title }) {
    const project = projectData.find((project) => project.title === title);
    if (!project) {
        return <div>Project not found</div>;
    }
    return (
        <>
            <article className={styles.project}>
                <Meta
                    title={title}
                    description={project.overview}
                />
                <Section className={styles.content}>
                    <div className={styles.grid}>
                        <Heading className={styles.title} level={3} id={title}>
                            <DecoderText text={title} delay={500} />
                        </Heading>

                        <div className={styles.ProjectDetails}>
                            <div key={project.id} className={styles.Left}>
                                <Text as="h4" weight="bold">Role </Text>
                                <Text as="h2">{project.role}</Text>
                                <Text as="h4" weight="bold">Overview </Text>
                                <Text as="span" size="medium" >{project.overview}</Text>
                                <Text as="h4" weight="bold">Key features</Text>
                                <Text as="ul" className={styles.KeyFeatureContainer}>
                                    {project.Features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </Text>
                                <Text as="h4" weight="bold">Role Justification </Text>
                                <Text as="span" size="medium" >{project.justify}</Text>
                                <Button secondary iconHoverShift icon="chevronRight" target="_blank" href={project.link} style={{ marginLeft: '16px', border: 'none', width: 'fit-content', alignSelf: 'flex-start' }}>
                                    Visit
                                </Button>
                            </div>
                            <div className="Right">
                                {project.videoUrl ? (
                                    <video
                                        className={styles.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src={project.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <Image
                                        reveal
                                        src={project.imageUrl}
                                        alt={project.title}
                                        placeholder={project.imageUrl}
                                        sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </Section>
                <Footer />
            </article>
        </>
    );
}
