import React from "react";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { projectData } from "projects/projectsData";
import styles from "./ProjectPage.module.css";
import { media } from 'utils/style';
import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';
import { Footer } from "components/Footer";
export default function ProjectPage({ title }) {
    const project = projectData.find((project) => project.title === title);
    if (!project) {
        return <div>Project not found</div>;
    }
    return (
        <>

            <div className={styles.box}>
                <div key={project.id} className={styles.Left}>
                    <Heading className={styles.title} level={3} id={title}>
                        <DecoderText text={title} delay={500} />
                    </Heading>
                    <Text as="h3" weight="medium">{project.role}</Text>
                    <Text as="h4" weight="bold">Overview </Text>
                    <Text as="span" size="medium" >{project.overview}</Text>
                    <Text as="h4" weight="bold">Key features</Text>
                    <Text as="ul">
                        {project.Features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </Text>
                    <Text as="h4" weight="bold">Role Justification </Text>
                    <Text as="span" size="medium" >{project.justify}</Text>
                    <a href={project.link}>Visit</a>
                </div>
                <div className="Right">
                    {project.videoUrl ? (
                        <video
                            className={styles.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
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
            <Footer />
        </>
    );
}
