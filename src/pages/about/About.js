import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImgLarge from 'assets/profile-large.jpg';
import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/profile.jpg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './About.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I&apos;m a Senior Frontend Engineer with 7+ years of experience building scalable, high-performance web
      applications using React and TypeScript. I thrive in remote, async-first environments and have a proven
      track record of leading frontend architecture decisions, mentoring engineers, and driving best practices
      across large, evolving codebases.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I actively integrate AI-assisted development tools — including Claude Code and Cursor — into my daily
      workflows to improve throughput and code quality. My core stack includes:
      <div className={styles.listContainer}>
        <Text data-visible={visible} size="l" as="p">
          • React.js, Next.js, Svelte.js
        </Text>
        <Text data-visible={visible} size="l" as="p">
          • TypeScript, GraphQL, REST APIs
        </Text>
        <Text data-visible={visible} size="l" as="p">
          • Redux, Zustand, React Query
        </Text>
        <Text data-visible={visible} size="l" as="p">
          • Node.js, Firebase, MongoDB
        </Text>
        <Text data-visible={visible} size="l" as="p">
          • AWS, GCP, Docker, GitHub Actions
        </Text>
      </div>
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I&apos;ve collaborated with distributed teams across multiple time zones and am flexible with working hours
      to match global business needs. Whether translating complex business logic into intuitive interfaces or
      architecting micro-frontends at scale, I focus on delivering clean, maintainable code that stands the test
      of time.
    </Text>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Why choose me?" start={visible} delay={500} />
    </Heading>
    <ul className={styles.features}>
      <Text className={styles.description} data-visible={visible} size="m" as="li">7+ years of professional frontend engineering experience</Text>
      <Text className={styles.description} data-visible={visible} size="m" as="li">Deep expertise in React, Next.js, TypeScript, Svelte, and modern state management (Redux, Zustand)</Text>
      <Text className={styles.description} data-visible={visible} size="m" as="li">Strong knowledge of frontend architecture — micro-frontends, SOLID principles, design patterns, and Agile/Scrum</Text>
      <Text className={styles.description} data-visible={visible} size="m" as="li">Comprehensive testing skills: Jest, React Testing Library, Cypress, Playwright, and cross-browser testing</Text>
      <Text className={styles.description} data-visible={visible} size="m" as="li">Experience with Blockchain and Web3 (Solidity, Web3.js, Ethers.js) and Cloud Platforms (AWS, GCP)</Text>
      <Text className={styles.description} data-visible={visible} size="m" as="li">Proven track record of mentoring engineers, conducting PR reviews, and raising engineering standards</Text>
      <Text className={styles.description} data-visible={visible} size="m" as="li">Experienced in collaborating with cross-functional teams: designers, product managers, backend engineers, and stakeholders</Text>
      <Text className={styles.description} data-visible={visible} size="m" as="li">Flexible with working hours — available for key meetings and collaborative sessions across time zones</Text>
    </ul>
  </Fragment >
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>

            {/*  =========  Incase you want to add image to the as well ========== 
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Know Who I&#39;m
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
              </div>
            </div> */}
          </div>
        )}
      </Transition>
    </Section>
  );
};
