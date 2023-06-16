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
        <Box sx={{ padding: "0 3rem" }}>
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

export default function Works() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        color: "black",
        padding: "calc(100vw/11) 0",
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
        <span
          className={dmsans_bold.className}
          style={{
            fontSize: 30,
            fontWeight: 900,
            borderRadius: "30px",
          }}
        >
          I have worked for a client on
        </span>
        <div
          className={dmsans.className}
          style={{
            flexGrow: 1,
            display: "flex",
            margin: "2% 0",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
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
                maxWidth: "calc(100vw/2)",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "column",
                  transition: "visibility 0s, opacity 0.5s linear",
                }}
              >
                <span
                  className={dmsans_bold.className}
                  style={{
                    fontSize: 24,
                  }}
                >
                  {data.caption}
                </span>
                <span style={{ opacity: 0.5, fontSize: 22 }}>
                  {data.duration}
                </span>
                <span style={{ fontSize: 20 }}> {data.desc}</span>
                <ToolsChip data={data.tools} />
              </Grid>
            </TabPanel>
          ))}
        </div>
        <a
          className={dmsans_bold.className}
          style={{
            fontSize: 20,
          }}
          target="_blank"
          href="https://drive.google.com/file/d/1VqaojaUd3RarrHLOb8h1JJWtAMugoEKr/view?usp=sharing"
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
    <Grid style={{ display: "flex", flexDirection: "row" }}>
      {props.data.map((data) => (
        <Chip
          caption={data}
          textColor="white"
          background="black"
          borderColor="black"
          fontSize="18px"
          margin="2% 2% 0 0"
        />
      ))}
    </Grid>
  );
}
