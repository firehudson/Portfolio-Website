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
      I am a seasoned technologist with over 7 years of experience in developing and delivering modern web and
      mobile applications. My passion for technology and design drives me to explore various domains, from
      console games to cutting-edge gadgets.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I am proficient in a wide range of technologies, including
      <div className={styles.listContainer}>
        <Text data-visible={visible} size="l" as="p">
          • Node.js
        </Text>
        <Text data-visible={visible} size="l" as="p">
          • Docker
        </Text>
        <Text data-visible={visible} size="l" as="p">
          • React
        </Text>
        <Text data-visible={visible} size="l" as="p">
          • Redux
        </Text>
        <Text data-visible={visible} size="l" as="p">
          • SQL and NoSQL databases
        </Text>
      </div>
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My extensive experience includes crafting customized, location-based applications, where I&apos;ve
      successfully designed and delivered innovative solutions with unique features. This journey has
      honed my ability to distill complex data into intuitive, user-friendly interfaces that elevate the
      overall user experience.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      As a forward-thinking engineer, I am dedicated to leveraging my technical expertise and design sensibility
      to create impactful applications. I am always eager to learn and explore new trends, ensuring that I stay
      at the forefront of the industry while delivering exceptional results.
    </Text>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Why choose me?" start={visible} delay={500} />
    </Heading>
    <ul className={styles.features}>
      <Text className={styles.description} data-visible={visible} size="m" as="li"> 7+ years of professional experience</Text>
      <Text className={styles.description} data-visible={visible} size="m" as="li"> Proficiency in modern technologies and frameworks including -React.js, Next.js, Svelte, Web3, Typescript, JavaScript, GraphQL, and Node.js</Text>
      <Text className={styles.description} data-visible={visible} size="m" as="li"> Good conceptual knowledge of Blockchain and Cloud Platforms (AWS, GCP) and practical knowledge of Frontend Architecture </Text>
      <Text className={styles.description} data-visible={visible} size="m" as="li"> Strong background in code optimization for speed and expertise in translating design mockups into usable frontend solutions</Text>
      <Text className={styles.description} data-visible={visible} size="m" as="li"> Deep knowledge of application testing (Unit, Integration, Automation, End-to-End), and experience in REST API integration and handling.</Text>
      <Text className={styles.description} data-visible={visible} size="m" as="li"> Expertise in collaborating with cross-functional teams including designers, backend developers, product managers, and other stakeholders</Text>
      <Text className={styles.description} data-visible={visible} size="m" as="li"> Prior experience in mentoring other developers and participating in code reviews</Text>
      <Text className={styles.description} data-visible={visible} size="m" as="li"> Excellent troubleshooting and problem-solving skills </Text>
      <Text className={styles.description} data-visible={visible} size="m" as="li">
        Collaboration Hours:Overlapping working hours are needed for effective collaboration in a remote setup. I am flexible and willing to adjust my schedule whenever required to make sure that I am available for key meetings and collaborative sessions, aligning with your working hours.
      </Text>
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
