import { Chips } from "components/Chips";
import styles from './skills.module.css';
import { DecoderText } from 'components/DecoderText';
import { Heading } from "components/Heading";
import { Footer } from "components/Footer";
import { Meta } from "components/Meta";
import { Section } from "components/Section";
import { Text } from "components/Text";

// Categorized skills
const skillCategories = {
    Frontend: ['React.js', 'JavaScript', 'HTML', 'CSS', 'TypeScript', 'Material UI', 'GraphQL'],
    Backend: ['Node.js', 'Firebase', 'Redux.js', 'GraphQL', 'IBM Watson', 'MongoDB'],
    Database: ['MongoDB', 'SQL', 'Firebase'],
    VersionControl: ['Git', 'GitHub', 'GitLab'],
    DevOps: ['Google Cloud Platform (GCP)', 'Firebase'],
    Testing: ['Mocha (JavaScript Framework)', 'Sentry', 'Storybook'],
    ProjectManagement: ['Jira', 'Agile Methodologies'],
    Other: ['Nx', 'Lerna', 'BrowserStack'],
};

const SkillsPage = () => {

    return (
        <div className={styles.SkillsPage}>
            {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category} className={styles.ChipsBox}>
                    <Text as="h1" size="xl" weight="medium">{category}</Text>
                    <div className={styles.skills}>
                        {skills.map((skill) => (
                            <Chips
                                key={skill}
                                title={skill}
                                className={styles.Chips}
                            />
                        ))}
                    </div>
                </div>
            ))}

        </div>
    );
};

export default function Skills() {
    return (
        <article className={styles.skills}>
            <Meta
                title="Skills"
                description="Experienced in crafting seamless and interactive web experiences using modern front-end and back-end technologies. From building dynamic user interfaces with React and JavaScript to developing efficient server-side solutions with Node.js, I focus on creating robust and scalable web applications. My skillset includes a strong foundation in CSS for responsive design and a commitment to continuous learning through certifications and real-world projects"
            />
            <Section className={styles.content}>
                <div className={styles.grid}>
                    <Heading level={3} as="h1">
                        <DecoderText text="Skills" />
                    </Heading>

                    <div className={styles.box}>
                        <SkillsPage />
                    </div>
                </div>
            </Section>
            <Footer />
        </article>

    );
}