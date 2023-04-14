import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import landingPage from 'assets/landingPage.jpg';
import landingPageLarge from 'assets/landingPage-large.jpg';
import performanceOptimization from 'assets/performanceOptimization.jpg';
import performanceOptimizationLarge from 'assets/performanceOptimization-large.jpg';
import pwaDevelopment from 'assets/pwaDevelopment.jpg';
import pwaDevelopmentLarge from 'assets/pwaDevelopment-large.jpg';
import customAppDevelopment from 'assets/customAppDevelopment.jpg';
import customAppDevelopmentLarge from 'assets/customAppDevelopment-large.jpg';
import debug from 'assets/debug.jpg';
import debugLarge from 'assets/debug-large.jpg';
import frontendArchitecture from 'assets/frontendArchitecture.jpg';
import frontendArchitectureLarge from 'assets/frontendArchitecture-large.jpg';
import mobileResponsive from 'assets/mobileResponsive.jpg';
import mobileResponsiveLarge from 'assets/mobileResponsive-large.jpg';
import academicWritingLarge from 'assets/academic-writing-large.jpg';
import academicWriting from 'assets/academic-writing.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import crossBorderCompatiblity from 'assets/crossBorderCompatiblity.jpg';
import crossBorderCompatiblityLarge from 'assets/crossBorderCompatiblity-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { Text } from 'components/Text';
import { Heading } from 'components/Heading';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Full-stack', 'Frontend', 'Solution engineer', 'Solution Architect'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const about = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      projectSix,
      about,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Software Developer"
        description="Design portfolio of Aditya Vaishnav — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Front-end Architecture & Design"
        description="As a developer, I consider front-end architecture and design to be an essential aspect of web development. It involves creating a solid foundation for the client-side of a web application or website. I prioritize designing user-friendly interfaces, implementing efficient functionality, and ensuring seamless communication with the back-end."
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [frontendArchitecture, frontendArchitectureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Custom App Development"
        description="As a developer, I work closely with clients to identify their needs and goals, and then design and develop a solution that meets those needs. This involves creating wireframes, prototypes, and user interface (UI) designs that are visually appealing, intuitive, and user-friendly. I also focus on creating a user-friendly interface that is easy to navigate and understand."
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [customAppDevelopment, customAppDevelopmentLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="User Interface Development"
        description="I believe that UI development and design is an essential part of any successful software application. It involves creating intuitive, easy-to-use, and aesthetically pleasing user interfaces (UI) that users interact with. Throughout the development process, I continuously test and refine the UI to ensure that it meets the highest quality standards and delivers an exceptional user experience. "
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [landingPage, landingPageLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="PWA Development"
        description="As a developer with experience in Progressive Web Apps (PWAs) development and design, I believe that PWAs offer a unique opportunity to deliver a high-quality user experience across different platforms and devices. PWA development involves creating web applications that can be accessed through a web browser or installed on a user's device like a native app. "
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [pwaDevelopment, pwaDevelopmentLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Mobile Responsiveness"
        description="Optimize web pages for mobile devices to ensure they are easy to use and navigate on smaller screens. I use various techniques and tools to ensure that my websites are mobile-responsive, including responsive design, flexible grid systems, and media queries. I also test my websites on different devices and browsers to ensure that they are optimized for a wide range of user scenarios."
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [mobileResponsive, mobileResponsiveLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Debugging and Testing"
        description="I believe that testing and debugging are critical to ensuring the quality and reliability of software applications. I perform extensive testing and debugging to identify and fix any errors or issues with the web pages or application. I use various tools and techniques to debug and test my code, including unit testing, integration testing, and acceptance testing."
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [debug, debugLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Heading className={styles.title} level={3}>
        Other Service&#39;s
      </Heading>
      <div className={styles.buttonContainer}>
        <Text className={styles.anchorTag}>Performance Optimization</Text>
        <Text className={styles.anchorTag}>Cross-Browser Compatibility</Text>
      </div>

      <Profile
        sectionRef={about}
        visible={visibleSections.includes(about.current)}
        id="about"
      />
      <Footer />
    </div>
  );
};
