/* eslint-disable react/jsx-key */
import { useState } from "react";
import Chip from "../components/Atoms/Chip";
import { Tabs, Tab, Typography, Box, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

import styles from "../../styles/Home.module.css";
import { DM_Sans } from "next/font/google";
import { WorksDetail } from "../../public/text";

const dmsans_bold = DM_Sans({
  weight: "700",
  subsets: ["latin"],
});

const dmsans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{ padding: "0 3rem" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Works(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        color: "black",
        padding: "calc(100vw/11) 0",
        textAlign: props.isMobile && "center",
        width: props.isMobile && "100vw",
      }}
    >
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiTab: {
              styleOverrides: {
                root: {
                  "&.Mui-selected": {
                    color: "black",
                    backgroundColor: "#ffebd7",
                    opacity: 1,
                    fontWeight: 500,
                  },
                },
              },
            },
          },
        })}
      >
        <span className={dmsans_bold.className + " " + styles.header_2}>
          I have worked for a client on
        </span>
        <div
          className={dmsans.className}
          style={{
            flexGrow: 1,
            display: "flex",
            margin: "2% 0",
            flexDirection: props.isMobile && "column",
          }}
        >
          <Tabs
            orientation={props.isMobile !== true && "vertical"}
            variant="scrollable"
            allowScrollButtonsMobile
            value={value}
            onChange={handleChange}
            scrollButtons="auto"
            TabIndicatorProps={{
              style: { background: "black" },
            }}
          >
            {WorksDetail?.map((data, index) => (
              <Tab
                className={styles.unstyled_tab}
                label={data.place}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
          {WorksDetail?.map((data, index) => (
            <TabPanel
              value={value}
              index={index}
              style={{
                maxWidth: props.isMobile !== true && "calc(100vw/2)",
                margin: props.isMobile && "5%",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "column",
                  transition: "visibility 0s, opacity 0.5s linear",
                }}
              >
                <span className={dmsans_bold.className + " " + styles.header_3}>
                  {data.caption}
                </span>
                <span
                  className={dmsans_bold.className + " " + styles.header_3}
                  style={{ opacity: 0.5 }}
                >
                  {data.duration}
                </span>
                <span className={styles.header_3}> {data.desc}</span>
                <ToolsChip data={data.tools} isMobile={props.isMobile} />
              </Grid>
            </TabPanel>
          ))}
        </div>
        <a
          className={dmsans_bold.className + " " + styles.header_3}
          target="_blank"
          href="https://drive.google.com/file/d/1a3XHkey6ROiKEBxXV1sjnPeiTbRPZfyP/view?usp=sharing"
          rel="noopener noreferrer"
        >
          View Full Resume ➜
        </a>
      </ThemeProvider>
    </div>
  );
}

function ToolsChip(props) {
  return (
    <Grid
      style={{
        display: "flex",
        flexWrap: "wrap",
        placeContent: props.isMobile && "center",
      }}
    >
      {props.data.map((data) => (
        <Chip
          caption={data}
          textColor="white"
          background="black"
          borderColor="black"
          fontSize={props.isMobile ? "18px" : "18px"}
          margin="2% 2% 0 0"
        />
      ))}
    </Grid>
  );
}
