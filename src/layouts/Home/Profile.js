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
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      ⭐I am a highly skilled technologist with over 7+ years of experience in developing
      and delivering modern-day applications for web and mobile platforms. My passion for
      technology and design has led me to explore various areas, including console games,
      gadgets, and computers.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      ⭐I own an experienced technologist proficient in the following technologies:
      <Text data-visible={visible} size="l" as="p">
        ✔️ Node.js
      </Text>
      <Text data-visible={visible} size="l" as="p">
        ✔️ Docker
      </Text>
      <Text data-visible={visible} size="l" as="p">
        ✔️ React
      </Text>
      <Text data-visible={visible} size="l" as="p">
        ✔️ Redux
      </Text>
      <Text data-visible={visible} size="l" as="p">
        ✔️ SQL and NoSQL databases
      </Text>
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      ⭐I have also gained extensive experience in developing customized, location-based
      applications. Over the past seven years, I have successfully designed and delivered
      several location-based apps, each with unique features and functionalities. My
      experience in this area has equipped me with the ability to understand complex data
      and translate it into user-friendly interfaces that provide an exceptional user
      experience.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      ⭐In summary, with over seven years of experience, I possess a wide range of
      technical skills and expertise in developing and delivering modern-day apps for both
      web and mobile platforms. I am passionate about technology and design, and I am
      always eager to learn and explore new areas to enhance my skills and knowledge.
    </Text>
  </Fragment>
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
                <Image
                  placeholder={profileImgPlaceholder}
                  srcSet={profileKatakana}
                  className={styles.profileText}
                  style={{
                    top: '-110px',
                    left: '91px',
                    scale: '0.85',
                    transform: 'rotate(90deg)',
                  }}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
