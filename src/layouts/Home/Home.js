import gamestackTexture2Large from 'assets/gamestack-list.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import landingPage from 'assets/landingPage.jpg';
import landingPageLarge from 'assets/landingPage-large.jpg';
import technicalWriting from 'assets/technical-writing.jpg';
import technicalWritingLarge from 'assets/technical-writing-large.jpg';
import seoWriting from 'assets/seo-writing.jpg';
import seoWritingLarge from 'assets/seo-writing-large.jpg';
import blog from 'assets/blog.jpg';
import blogLarge from 'assets/blog-large.jpg';
import webPageContent from 'assets/webPageContent.jpg';
import webPageContentLarge from 'assets/webPageContent-large.jpg';
import newsletter from 'assets/newsletter.jpg';
import newsletterLarge from 'assets/newsletter-large.jpg';
import medicalContentWriting from 'assets/medicalContentWriting.jpg';
import medicalContentWritingLarge from 'assets/medicalContentWriting-large.jpg';
import productEquipement from 'assets/productEquipement.jpg';
import productEquipementLarge from 'assets/productEquipement-large.jpg';
import procedurePage from 'assets/procedurePage.jpg';
import procedurePageLarge from 'assets/procedurePage-large.jpg';
import debug from 'assets/debug.jpg';
// import debugLarge from 'assets/debug-large.jpg';
import proofReading from 'assets/proofReading.jpg';
import proofReadingLarge from 'assets/proofReading-large.jpg';
import academicWritingLarge from 'assets/academic-writing-large.jpg';
import academicWriting from 'assets/academic-writing.png';
import mobileResponsive from 'assets/mobileResponsive.jpg';
// import mobileResponsiveLarge from 'assets/mobileResponsive-large.jpg';

import crossBorderCompatiblity from 'assets/crossBorderCompatiblity.jpeg';
// import crossBorderCompatiblityLarge from 'assets/crossBorderCompatiblity-large.jpg';
import serverSide from 'assets/serverSide.jpg';
// import serverSideLarge from 'assets/serverSide-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Full-stack', 'Frontend', 'Solution engineer'];

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
  const projectSeven = useRef();
  const projectEight = useRef();
  const projectNine = useRef();
  const projectTen = useRef();
  const projectEleven = useRef();
  const projectTwelve = useRef();
  const projectThirteen = useRef();
  const projectFourteen = useRef();

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
      projectSeven,
      projectEight,
      projectNine,
      projectTen,
      projectEleven,
      projectTwelve,
      projectThirteen,
      projectFourteen,
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
        title="Debugging and Testing"
        description="Perform extensive testing and debugging to identify and fix any errors or issues with the web pages or application."
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [debug, debug],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Performance Optimization"
        description="Optimize web page performance to load quickly and efficiently while minimizing resource usage."
        buttonText="View Case Studies"
        buttonLink="/articles/?0=Case+Study"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, mobileResponsive],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Mobile Responsiveness"
        description="Optimize web pages for mobile devices to ensure they are easy to use and navigate on smaller screens."
        buttonText="View Case Studies"
        buttonLink="/articles/?0=Case+Study"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [mobileResponsive, mobileResponsive],
              placeholder: sprTexturePlaceholder,
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
        title="Cross-Browser Compatibility"
        description=" Ensure that web pages are compatible with different web browsers and operating systems, to ensure a consistent user experience across different devices and platforms."
        buttonText="View Content"
        buttonLink="/articles/?0=Medical+Content+Writing"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [crossBorderCompatiblity, crossBorderCompatiblity],
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
        title="User Interface Development"
        description="Create intuitive, easy-to-use, and aesthetically pleasing user interfaces (UI) that users interact with."
        buttonText="View Content"
        buttonLink="/articles/?0=Landing+Page+Copy"
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
        id="project-6"
        alternate
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="Design Implementation"
        description="Transform designs provided by web designers into functional web pages using HTML, CSS, and JavaScript."
        buttonText="View Content"
        buttonLink="/articles/?0=Landing+Page+Copy"
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
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        title="Product Description"
        description=" I specialize in creating clear, concise, and persuasive product descriptions for medical products. Whether it's medical devices, supplements, or pharmaceuticals, I help clients convey the benefits and features of their products in an easy-to-understand way."
        buttonText="View Content"
        buttonLink="/articles/?0=Product+Description"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [productEquipement, productEquipementLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-8"
        alternate
        sectionRef={projectEight}
        visible={visibleSections.includes(projectEight.current)}
        index={8}
        title="Procedure Page"
        description="With my experience in medical writing, I create detailed and informative procedure pages that provide patients with step-by-step guidance on medical procedures. I help clients offer valuable resources to their patients and reduce the risk of confusion or complications."
        buttonText="View Pages"
        buttonLink="/articles/?0=Procedure+Page"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [procedurePage, procedurePageLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-9"
        sectionRef={projectNine}
        visible={visibleSections.includes(projectNine.current)}
        index={9}
        title="Technical Writing"
        description="I offer technical writing services that are accurate, clear, and concise. From user manuals and operating procedures to regulatory documentation, I help clients communicate complex technical information to various audiences."
        buttonText="View Content"
        buttonLink="/articles/?0=Technical+Writing"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [technicalWriting, technicalWritingLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-10"
        alternate
        sectionRef={projectTen}
        visible={visibleSections.includes(projectTen.current)}
        index={10}
        title="SEO Writing"
        description="I specialize in creating SEO-friendly medical content that helps businesses rank higher in search engine results. With my knowledge of keyword research and on-page optimization, I help clients attract more website traffic and generate more leads."
        buttonText="View Content"
        buttonLink="/articles/?0=SEO+Writing"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [seoWriting, seoWritingLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-11"
        sectionRef={projectEleven}
        visible={visibleSections.includes(projectEleven.current)}
        index={11}
        title="Blog"
        description="I provide engaging and informative blog content that covers a wide range of medical topics. From industry news and trends to patient education and lifestyle advice, I help clients establish themselves as thought leaders in the medical industry."
        buttonText="View Blogs"
        buttonLink="/articles/?0=Blog"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [blog, blogLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-12"
        alternate
        sectionRef={projectTwelve}
        visible={visibleSections.includes(projectTwelve.current)}
        index={12}
        title="Web Page Content"
        description="With my expertise in medical writing, I create informative and persuasive web page content that resonates with target audiences. I help clients improve their website's user experience and increase conversions through compelling and engaging copy."
        buttonText="View Content"
        buttonLink="/articles/?0=Web+Page+Content"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [webPageContent, webPageContentLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-13"
        sectionRef={projectThirteen}
        visible={visibleSections.includes(projectThirteen.current)}
        index={13}
        title="Newsletter"
        description="I offer professional medical newsletter writing services that help businesses stay connected with their audience. From industry updates and news to company updates and promotions, I help clients create informative, engaging, and effective newsletters."
        buttonText="View Newsletters"
        buttonLink="/articles/?0=Newsletter"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [newsletter, newsletterLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-14"
        alternate
        sectionRef={projectFourteen}
        visible={visibleSections.includes(projectFourteen.current)}
        index={14}
        title="Editing and Proofreading"
        description="Editing and proofreading are essential steps in ensuring that your medical writing is accurate, clear, and polished. As an experienced editor and proofreader, I can help refine your work, checking for errors in grammar, spelling, and syntax, and ensuring that your writing meets the highest standards of clarity and precision."
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [proofReading, proofReadingLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      <Profile
        sectionRef={about}
        visible={visibleSections.includes(about.current)}
        id="about"
      />
      <Footer />
    </div>
  );
};
