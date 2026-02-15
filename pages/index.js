import Head from "next/head";
import styles from "../styles/Home.module.css";
import Splash from "./containers/Splash";
import Navbar from "./components/Navbar";
import Hero from "./containers/Hero";
import About from "./containers/About";
import Works from "./containers/Works";
import Projects from "./containers/Projects";
import Floating from "./components/Organisms/Floating";
import Footer from "./containers/Footer";
import Cursor from "./components/Atoms/Cursor";
import { useEffect, useState } from "react";

export default function Home() {
  const [pageLoading, setPageLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 4500);
    setTimeout(() => {
      setPageLoading(false);
    }, 5000);
    if (window?.innerWidth < 600) return setIsMobile(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(
        "#hero, #about, #works, #project",
      );
      const viewportCenter = window.innerHeight / 2;

      let closestSection = null;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - sectionCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection && closestSection.id !== activeSection) {
        setActiveSection(closestSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className={styles.root}>
      <div>
        <Head>
          <title>Pangestu | Frontend Developer</title>

          <meta
            name="description"
            content="Portfolio of Mohammad Iqbal Kresn Pangestu, a frontend developer specialized in Next.js and modern web architecture."
          />

          <meta
            name="keywords"
            content="Mohammad Iqbal Kresna Pangestu, Frontend Developer, Next.js Developer, React Developer, Portfolio"
          />

          <meta name="author" content="Mohammad Iqbal Kresna Pangestu" />

          {/* Open Graph */}
          <meta property="og:title" content="Pangestu | Frontend Developer" />
          <meta
            property="og:description"
            content="Frontend developer who learn"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://kresnapangestu.com" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Mohammad Iqbal Kresna Pangestu",
                url: "https://kresnapangestu.com",
                jobTitle: "Frontend Developer",
                sameAs: [
                  "https://github.com/kresnapangestu",
                  "https://linkedin.com/in/kresnaiqbal",
                ],
              }),
            }}
          />
        </Head>

        <div className={styles.container}>
          {pageLoading ? (
            <Splash className={fade === true ? `fadeIn` : `fadeOut`} />
          ) : (
            <div className={fade === false && `fadeIn`}>
              <Cursor />
              <Navbar isMobile={isMobile} />
              <Floating activeSection={activeSection} isMobile={isMobile} />

              <div className={styles.content}>
                <div id="hero">
                  <Hero isMobile={isMobile} />
                </div>
                <div id="about">
                  <About isMobile={isMobile} />
                </div>
                <div id="works">
                  <Works isMobile={isMobile} />
                </div>
                <div id="project">
                  <Projects isMobile={isMobile} />
                </div>
              </div>
              <Footer isMobile={isMobile} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
