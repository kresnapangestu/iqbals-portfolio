/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function Hero(props) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("");
  let greetingsList = [
    "Hello",
    "Nǐ hǎo",
    "Bonjour",
    "Halo",
    "Konnichiwa",
    "Ahoj",
    "Hola",
    "Namaste",
    "Здравствуйте",
    "Ciao",
    "Annyeong",
    "Ola",
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
          ? "calc(100vh/6.8) calc(100vw/7)"
          : "calc(100vw/11) calc(100vw/7)",
        zIndex: 99,
      }}
    >
      <span
        style={{
          fontSize: props.isMobile ? 20 : 30,
        }}
      >
        <a className={`${phase}`} style={{ transition: "all 1s" }}>
          {greetingsList[index]}
        </a>
        , My Name is
      </span>
      <br></br>
      <h1
        className="font-semibold"
        style={{
          fontSize: props.isMobile ? 32 : 62,
          marginBottom: 0,
        }}
      >
        Mohammad Iqbal Kresna Pangestu. <br></br>Front-end Website Developer{" "}
        <br></br>
        Based in Bandung & Jakarta.
      </h1>
      <br></br>
      <br></br>
      <span
        className="font-light"
        style={{
          fontSize: props.isMobile ? 20 : 32,
        }}
      >
        4+ year experience software engineer specializing in building (sometimes
        designing) websites. Currently collaborating and helping{" "}
        <a style={{ color: "#D7942D" }}>Huawei Tech Investment</a> to build
        solid and scalable products. <br></br>
        <br></br> I am passionate to build beautifully pleasing interface and
        lovable products 🤓
      </span>
    </div>
  );
}
