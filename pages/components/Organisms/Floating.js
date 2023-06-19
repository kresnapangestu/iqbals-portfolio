import Image from "next/image";
import { Grid } from "@mui/material";

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
          top: "40%",
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
            <Image
              src="/images/instagram.webp"
              width={30}
              height={30}
              alt="Logo Instagram"
              loading="eager"
              style={{
                position: "absolute",
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
            <Image
              src="/images/linkedin.webp"
              width={30}
              height={30}
              loading="eager"
              alt="Logo linkedin"
              style={{
                position: "absolute",
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
            <Image
              src="/images/Github.webp"
              width={30}
              height={30}
              alt="Logo Github"
              loading="eager"
              style={{
                position: "absolute",
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
          top: "60%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ width: "calc(100vw/30)" }}>
          <span
            style={{
              position: "absolute",
              color: "black",
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
