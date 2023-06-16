/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function Hero() {
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
        padding: "calc(100vw/11) calc(100vw/7)",
        zIndex: 99,
        fontWeight: 900,
      }}
    >
      <span style={{ fontSize: 30 }}>
        <a className={`${phase}`} style={{ transition: "all 1s" }}>
          {greetingsList[index]}
        </a>
        , My Name is
      </span>
      <br></br>
      <span style={{ fontSize: 70 }}>
        Mohammad Iqbal Kresna Pangestu. Front-end Website Developer <br></br>
        Based in Bandung.
      </span>
      <br></br>
      <br></br>
      <span style={{ fontSize: 30 }}>
        I am a software engineer specializing in building (also designing)
        websites. <br></br>Currently helping{" "}
        <a style={{ color: "red" }}>Huawei Tech Investment</a> to build solid
        and scalable products. <br></br>
        <br></br> I am passionate to build beautifully minamalist interface and
        lovable products 🤓
      </span>
    </div>
  );
}
