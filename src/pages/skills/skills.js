import { Chips } from "components/Chips";
import styles from './skills.module.css';
import { DecoderText } from 'components/DecoderText';
import { Heading } from "components/Heading";
import { Footer } from "components/Footer";
import { Meta } from "components/Meta";
import { Section } from "components/Section";
import { Text } from "components/Text";

const skillCategories = {
    'Frontend Frameworks & Libraries': ['React.js', 'Next.js', 'Svelte.js', 'Redux', 'Zustand', 'Redux Thunk', 'Redux Saga', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    'AI & Intelligent Tooling': ['Claude Code', 'Cursor', 'Windsurf', 'Lovable', 'GitHub Copilot'],
    'UI & Design Systems': ['Tailwind CSS', 'Material UI', 'Ant Design', 'Storybook', 'Reactstrap', 'Melt UI', 'Skeleton UI', 'Reshaped'],
    'Data Fetching & Visualization': ['REST APIs', 'GraphQL', 'React Query', 'Axios', 'Fetch API', 'Recharts', 'React Table'],
    'Backend & Databases': ['Node.js', 'Firebase', 'Firestore', 'MongoDB', 'FaunaDB', 'MySQL', 'Vercel Blob'],
    'Cloud, Auth & DevOps': ['AWS', 'GCP', 'Docker', 'GitHub Actions', 'Vercel', 'Netlify', 'Auth0', 'Clerk', 'Okta', 'Sentry', 'Datadog'],
    'Testing & Code Quality': ['Jest', 'React Testing Library', 'Cypress', 'Playwright', 'Testcafe', 'ESLint', 'Prettier', 'SonarCloud', 'Cross-Browser Testing'],
    'Architecture & Methodology': ['Micro-frontends', 'SOLID Principles', 'Domain Modelling', 'Design Patterns', 'Monolithic Architecture', 'Agile/Scrum'],
    'Blockchain & Web3': ['Smart Contract Development', 'Solidity', 'Web3.js', 'Ethers.js'],
    'Version Control & Collaboration': ['Git', 'GitHub', 'GitLab', 'Jira', 'ClickUp', 'Figma', 'Slack'],
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