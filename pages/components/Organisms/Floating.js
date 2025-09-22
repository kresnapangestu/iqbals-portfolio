import Image from "next/image";
import { Grid } from "@mui/material";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Floating(props) {
  return (
    <Grid
      container
      direction="row"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap-reverse",
        flexDirection: "row-reverse",
        position: "relative",
        zIndex: 99,
        display: props.isMobile && "none",
      }}
    >
      <div
        style={{
          position: "fixed",
          left: "3%",
          top: "25%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: "100px",
            margin: "30% 0",
          }}
        >
          <a
            target="_blank"
            href="https://instagram.com/pangestuportfolio"
            rel="noopener noreferrer"
          >
            {" "}
            <FaInstagram
              style={{
                fontSize: 30,
                color: props?.activeSection !== "about" ? "black" : "#FFF66B",
              }}
            />
          </a>
        </div>

        <div style={{ width: "100px", margin: "30% 0" }}>
          <a
            target="_blank"
            href="https://linkedin.com/in/kresnaiqbal/"
            rel="noopener noreferrer"
          >
            {" "}
            <FaLinkedinIn
              style={{
                fontSize: 30,
                color: props?.activeSection !== "about" ? "black" : "#FFF66B",
              }}
            />
          </a>
        </div>

        <div style={{ width: "100px", margin: "30% 0" }}>
          <a
            target="_blank"
            href="https://github.com/kresnapangestu?tab=repositories"
            rel="noopener noreferrer"
          >
            {" "}
            <FaGithub
              style={{
                fontSize: 30,
                color: props?.activeSection !== "about" ? "black" : "#FFF66B",
              }}
            />
          </a>
        </div>
      </div>
      <div
        style={{
          // margin: "1% 0",
          position: "fixed",
          transform: "rotate(90deg)",
          //   left: "3%",
          top: "30%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ width: "calc(100vw/30)" }}>
          <span
            style={{
              position: "absolute",
              color: "black",
              color: props?.activeSection !== "about" ? "black" : "#FFF66B",
            }}
          >
            mohammadiqbalkresna@gmail.com
          </span>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          left: "0",
          top: "88%",
          display: "flex",

          flexDirection: "column",
        }}
      >
        <Image
          src="/images/memoji-iqbal.webp"
          width={80}
          height={80}
          alt="Logo Floating"
          loading="eager"
          style={{
            margin: "1% 0",
            position: "absolute",
            left: "30px",
          }}
        />
      </div>
    </Grid>
  );
}
