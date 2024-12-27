import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Footer } from 'components/Footer';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { useReducedMotion } from 'framer-motion';
import { useWindowSize } from 'hooks';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { formatDate } from 'utils/date';
import { classes, cssProps } from 'utils/style';
import { Chips } from 'components/Chips';
import styles from './Experience.module.css';

const ExperiencePost = ({
  slug,
  title,
  abstract,
  date,
  duration,
  featured,
  banner,
  categories,
  link,
  index,
}) => {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setDateTime(formatDate(date));
  }, [date, dateTime]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <article
      className={styles.post}
      data-featured={!!featured}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      {featured && (
        <Text className={styles.postLabel} size="s">
          Featured
        </Text>
      )}
      {featured && !!banner && (
        <div className={styles.postImage}>
          <Image
            noPauseButton
            play={!reduceMotion ? hovered : undefined}
            src={{ src: banner }}
            placeholder={{ src: `${banner.split('.')[0]}-placeholder.jpg` }}
            alt=""
            role="presentation"
          />
        </div>
      )}
      <a
        href={`${link}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.postLink}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider lineWidth="33%" notchWidth="64px" notchHeight="8px" />
            {categories?.map((text, index) => (
              <div className={styles.chipsArticle} key={index}>
                {text}
              </div>
            ))}
          </div>

          <Heading as="h2" level={featured ? 2 : 4}>
            {title}
          </Heading>

          <Text as="p">
            {duration}
          </Text>
          <Text size={featured ? 'l' : 's'} as="p">
            {abstract.split('-').map((data, index) => (
              <div key={index}>
                {index < abstract.split('-').length - 1 ? (
                  <div className={styles.dataContainer}>
                    -
                    <div>{data}</div>
                  </div>
                ) : (
                  <div className={classes(styles.techStackContainer, styles.dataContainer)}>
                    -
                    <div>
                      {data}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Text>
          <div className={styles.postFooter}>
            <Button secondary iconHoverShift icon="chevronRight" as="div">
              Visit
            </Button>
          </div>
        </div>
      </a>
    </article>
  );
};

const SkeletonPost = ({ index }) => {
  return (
    <article
      aria-hidden="true"
      className={classes(styles.post, styles.skeleton)}
      style={index !== undefined ? cssProps({ delay: index * 100 + 200 }) : undefined}
    >
      <div className={styles.postLink}>
        <div className={styles.postDetails}>
          <div aria-hidden className={styles.postDate}>
            <Divider notchWidth="64px" notchHeight="8px" />
            Coming soon...
          </div>
          <Heading
            className={styles.skeletonBone}
            as="h2"
            level={4}
            style={{ height: 24, width: '70%' }}
          />
          <Text
            className={styles.skeletonBone}
            size="s"
            as="p"
            style={{ height: 90, width: '100%' }}
          />
          <div className={styles.postFooter}>
            <Button secondary iconHoverShift icon="chevronRight" as="div">
              Read more
            </Button>
            <Text className={styles.timecode} size="s">
              00:00:00:00
            </Text>
          </div>
        </div>
      </div>
    </article>
  );
};

export const Experience = ({ posts, featured }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const router = useRouter();
  let urlPath = router.asPath;
  const splittedUrlPath = urlPath?.split('=');

  useEffect(() => {
    if (splittedUrlPath.length > 1) {
      const category = splittedUrlPath[1]?.replaceAll('+', ' ');
      setSelectedCategories([category]);
    } else {
      setSelectedCategories([]);
    }
  }, []);

  const categories = [
    'Full-Stack Developer',
    'Frontend Architect',
    'Senior Frontend Developer',
    'Frontend Developer',
    'Solution Engineer',
  ];

  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;

  const postsHeader = (
    <header className={styles.header}>
      <Heading className={styles.heading} level={5} as="h1">
        <DecoderText text="Experience" />
      </Heading>
    </header>
  );

  const postList = (
    <div className={styles.list}>
      {!isSingleColumn && postsHeader}
      <div className={styles.categoriesContainer}>
        {categories.map((title, index) => (
          <Chips
            title={title}
            selected={selectedCategories.includes(title)}
            key={index}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        ))}
      </div>
      {posts.map(({ slug, ...post }, index) => {
        if (
          selectedCategories.some(elem => post.categories.includes(elem)) ||
          selectedCategories.length === 0
        )
          return <ExperiencePost key={slug} slug={slug} index={index} {...post} />;
      })}
      {/* {Array(2)
        .fill()
        .map((skeleton, index) => (
          <SkeletonPost key={index} />
        ))} */}
    </div>
  );

  const featuredPost = <ExperiencePost {...featured} />;

  return (
    <article className={styles.experience}>
      <Meta
        title="Experience"
        description="A collection of technical design and development Experience. May contain incoherent ramblings."
      />
      <Section className={styles.content}>
        {!isSingleColumn && (
          <div className={styles.grid}>
            {postList}
            {featuredPost}
          </div>
        )}
        {isSingleColumn && (
          <div className={styles.grid}>
            {postsHeader}
            {featuredPost}
            {postList}
          </div>
        )}
      </Section>
      <Footer />
    </article>
  );
};