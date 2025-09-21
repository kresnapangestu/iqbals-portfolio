/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

import { DM_Sans } from "next/font/google";

const dmsans_bold = DM_Sans({
  weight: "500",
  subsets: ["latin"],
});

export default function Hero(props) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("");
  let greetingsList = [
    "Hey",
    "Hello",
    "Nǐ hǎo",
    "Bonjour",
    "Halo",
    "Konnichiwa",
    "Ahoj",
    "Hola",
  ];

  useEffect(() => {
    setTimeout(() => {
      let i = index + 1;
      if (i === greetingsList.length) {
        setIndex(0);
      } else {
        setIndex(i);
      }
      setTimeout(() => {
        setPhase("fadeOut");
      }, 3000);
      setPhase("fadeIn");
    }, 5000);
  }, [index]);

  return (
    <div
      style={{
        color: "black",
        flex: 1,
        padding: props.isMobile
          ? "calc(100vh/11) calc(100vw/7)"
          : "calc(100vw/11) calc(100vw/7)",
        zIndex: 99,
      }}
    >
      <span className={styles.header_2}>
        <a className={`${phase}`} style={{ transition: "all 1s" }}>
          {greetingsList[index]}
        </a>
        , My Name is
      </span>
      <br></br>
      <span className={dmsans_bold.className + " " + styles.header_1}>
        Mohammad Iqbal Kresna Pangestu. Front-end Website Developer <br></br>
        Based in Bandung.
      </span>
      <br></br>
      <br></br>
      <span className={styles.header_2}>
        4+ year experience software engineer specializing in building (sometimes
        designing) websites. <br></br>Currently collaborating and helping{" "}
        <a style={{ color: "#D7942D" }}>Huawei Tech Investment</a> to build
        solid and scalable products. <br></br>
        <br></br> I am passionate to build beautifully pleasing interface and
        lovable products 🤓
      </span>
    </div>
  );
}
