/* eslint-disable react/jsx-key */
import { useState } from "react";
import Chip from "../components/Atoms/Chip";
import { Tabs, Tab, Typography, Box, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import styles from "../../styles/Home.module.css";
import { DM_Sans } from "next/font/google";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import { Code, Launch } from "@mui/icons-material";

import { ProjectList } from "../../public/text";

const dmsans_bold = DM_Sans({
  weight: "700",
  subsets: ["latin"],
});

const dmsans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});

export default function Projects() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        color: "black",
        padding: "calc(100vw/11) 0",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <span
        className={dmsans_bold.className}
        style={{
          fontSize: 30,
          fontWeight: 900,
          borderRadius: "30px",
          textAlign: "center",
        }}
      >
        My Projects
      </span>
      <div
        className={dmsans.className}
        style={{
          margin: "2% 0",
          textAlign: "-webkit-center",
        }}
      >
        <Carousel
          showArrows={true}
          width="60%"
          infiniteLoop="true"
          autoPlay="true"
          interval="3000"
          showIndicator={false}
          showStatus={false}
          emulateTouch="true"
          showThumbs={false}
          style={{ margin: " 0 0 2% 0" }}
        >
          {ProjectList.map((data) => (
            <div>
              <div className={`styledContainer`}>
                <Image
                  loading="lazy"
                  src={data.image}
                  alt="Projects"
                  width={950}
                  height={600}
                  className={` styledImage`}
                  style={{
                    filter: "blur(2px)",
                    // "-webkit-filter": "blur(1px)",
                  }}
                />
              </div>
              <div className={`overlay`}></div>
              <span className={`text`}>
                <a>{data.caption}</a>
                <ToolsChip data={data.tools} margin="5% 2% 5% 0" />
                {data.code && (
                  <a
                    className={dmsans_bold.className}
                    style={{
                      fontSize: 20,
                      margin: "2%",
                    }}
                    target="_blank"
                    href={data.code}
                    rel="noopener noreferrer"
                  >
                    <Code />
                  </a>
                )}
                {data.open && (
                  <a
                    className={dmsans_bold.className}
                    style={{
                      fontSize: 20,
                      margin: "2% 2% 2% 0",
                    }}
                    target="_blank"
                    href={data.open}
                    rel="noopener noreferrer"
                  >
                    <Launch />
                  </a>
                )}
              </span>
            </div>
          ))}
        </Carousel>
      </div>
      <a
        className={dmsans_bold.className}
        style={{
          fontSize: 20,
        }}
        target="_blank"
        href="https://drive.google.com/file/d/1fYnYU6lwSHLcUPkDLKWJ3i1alzp1Xi5l/view?usp=sharing"
        rel="noopener noreferrer"
      >
        Show More ➜
      </a>
    </div>
  );
}

function ToolsChip(props) {
  return (
    <Grid
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {props?.data?.map((data) => (
        <Chip
          caption={data}
          textColor="white"
          background="black"
          borderColor="black"
          fontSize="18px"
          margin={props.margin || "2% 2% 0 0"}
        />
      ))}
    </Grid>
  );
}
