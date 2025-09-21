/* eslint-disable react/jsx-key */
import { useState } from "react";
import Chip from "../components/Atoms/Chip";
import { Grid } from "@mui/material";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { DM_Sans } from "next/font/google";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

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

export default function Projects(props) {
  return (
    <div
      style={{
        padding: "calc(100vw/11) 0",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <span
        className={dmsans_bold.className + " " + styles.header_2}
        style={{
          borderRadius: "30px",
          textAlign: "center",

          color: "black",
        }}
      >
        My Projects
      </span>
      <div
        className={dmsans.className}
        style={{
          margin: props.isMobile ? "5% 0" : "2% 0",
          textAlign: "-webkit-center",
        }}
      >
        <Carousel
          showArrows={true}
          width={props.isMobile ? "80%" : "60%"}
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
                    filter: "blur(4px)",
                    // "-webkit-filter": "blur(1px)",
                  }}
                />
              </div>
              <div className={`overlay`}></div>
              <span
                className={`text`}
                style={{ textAlign: props.isMobile && "left", color: "white" }}
              >
                <a style={{ fontSize: props.isMobile && 12 }}>{data.caption}</a>
                <ToolsChip
                  data={data.tools}
                  margin={props.isMobile ? "5% 2% 5% 0" : "5% 2% 5% 0"}
                  isMobile={props.isMobile}
                />
                {data.code && (
                  <a
                    className={dmsans_bold.className}
                    style={{
                      fontSize: 20,
                      margin: props.isMobile ? "5%" : "2%",
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
                    className={dmsans_bold.className + " " + styles.header_2}
                    style={{
                      margin: props.isMobile ? "10% 0 0 0" : "2% 2% 2% 0",
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
        className={dmsans_bold.className + " " + styles.header_3}
        target="_blank"
        href="https://drive.google.com/file/d/13ARBqooRlTh4BOMDtfqeWcG0Pq_VL3tA/view?usp=sharing"
        rel="noopener noreferrer"
        style={{ color: "black" }}
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
        justifyContent: props.isMobile ? "left" : "center",
        flexWrap: "wrap",
      }}
    >
      {props?.data?.map((data) => (
        <Chip
          caption={data}
          textColor="white"
          background="black"
          borderColor="black"
          fontSize={props.isMobile ? "10px" : "18px"}
          margin={props.margin || "2% 2% 0 0"}
        />
      ))}
    </Grid>
  );
}
