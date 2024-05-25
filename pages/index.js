import Head from "next/head";
import styles from "../styles/Home.module.css";
import { DM_Sans } from "next/font/google";
import { Grid } from "@mui/material";
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

const dmsans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [pageLoading, setPageLoading] = useState(true);
  const [fade, setFade] = useState(false);
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

  return (
    <div className={styles.root}>
      <div className={dmsans.className}>
        <Head>
          <title>Pangestu</title>
          <meta
            name="description"
            content="Portfolio of Mohammad Iqbal Kresna Pangestu"
          />
          <link rel="icon" type="image/png" href="/favicon.webp" />
        </Head>

        <div className={styles.container}>
          {pageLoading ? (
            <Splash className={fade === true ? `fadeIn` : `fadeOut`} />
          ) : (
            <div className={fade === false && `fadeIn`}>
              <Cursor />
              <Navbar isMobile={isMobile} />
              <Floating isMobile={isMobile} />

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
