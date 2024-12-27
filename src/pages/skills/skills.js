import { Chips } from "components/Chips";
import styles from './skills.module.css';
import { DecoderText } from 'components/DecoderText';
import { Heading } from "components/Heading";
import { Footer } from "components/Footer";
import { Divider } from "components/Divider";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

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
    const [selectedSkills, setSelectedSkills] = useState([]);
    const router = useRouter();

    // Sync selectedSkills with URL query parameters on load and update
    useEffect(() => {
        if (router.query.filter) {
            setSelectedSkills(router.query.filter.split(','));
        }
    }, [router.query.filter]);

    // Update the URL query parameter when selectedSkills changes
    useEffect(() => {
        if (selectedSkills.length > 0) {
            router.push({
                pathname: router.pathname,
                query: { filter: selectedSkills.join(',') }
            });
        } else {
            router.push(router.pathname); // Reset URL when no filters are selected
        }
    }, [selectedSkills]);

    return (
        <div className={styles.SkillsPage}>
            {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category} className={styles.ChipsBox}>
                    <h4>{category}</h4>
                    <div className={styles.skills}>
                        {skills.map((skill) => (
                            <Chips
                                key={skill}
                                title={skill}
                                className={styles.Chips}
                                selected={selectedSkills.includes(skill)}
                                selectedCategories={selectedSkills}
                                setSelectedCategories={setSelectedSkills}
                            />
                        ))}
                    </div>
                </div>
            ))}
            {selectedSkills.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Selected Skills:</h2>
                    <ul>
                        {selectedSkills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default function Skills() {
    return (<div className={styles.mainContainer}>
        <Heading className={styles.heading} level={3} as="h1">
            <DecoderText text="Skillsets" />
        </Heading>
        <div className={styles.box}>
            <SkillsPage />
        </div>
        <Footer />
    </div>);
}