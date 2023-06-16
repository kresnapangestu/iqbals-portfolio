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
import { useEffect, useRef, useState } from "react";

const dmsans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [pageLoading, setPageLoading] = useState(true);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
      console.log("MASHOOOK");
    }, 4500);
    setTimeout(() => {
      setPageLoading(false);
    }, 5000);
  }, []);

  return (
    <div className={styles.container}>
      <div className={dmsans.className}>
        <Head>
          <title>Pangestu</title>
          <meta
            name="description"
            content="Portfolio of Mohammad Iqbal Kresna Pangestu"
          />
          <link rel="icon" type="image/png" href="/favicon.webp" />
        </Head>

        <Grid style={{ display: "flex", flexDirection: "column" }}>
          {pageLoading ? (
            <Splash className={fade === true ? `fadeIn` : `fadeOut`} />
          ) : (
            <div className={fade === false && `fadeIn`}>
              <Cursor />
              <Navbar />
              <Floating />
              <Grid className={styles.content}>
                <Grid id="hero">
                  <Hero />
                </Grid>
                <Grid id="about">
                  <About />
                </Grid>
                <Grid id="works">
                  <Works />
                </Grid>
                <Grid id="project">
                  <Projects />
                </Grid>
              </Grid>
              <Footer />
            </div>
          )}
        </Grid>
      </div>
    </div>
  );
}
