import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { Grid } from "@mui/material";
import Chip from "./Atoms/Chip";

export default function Navbar() {
  return (
    <Grid
      container
      direction="row"
      style={{
        minWidth: "100vw",
        background: "#000",
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        // flexDirection: "row",
        zIndex: 99,
      }}
    >
      <Image
        src="/images/logo.png"
        width={130}
        height={30}
        alt="Logo Navbar"
        style={{ margin: "1% 3%" }}
      />
      <Grid
        style={{
          margin: "1%",
          width: 290,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Link
          href="#about"
          on
          style={{
            fontSize: 18,
            behavior: "smooth",
          }}
        >
          About
        </Link>
        <Link
          href="#works"
          on
          style={{
            fontSize: 18,
            behavior: "smooth",
          }}
        >
          Work
        </Link>
        <Link
          href="#project"
          style={{
            fontSize: 18,
            behavior: "smooth",
          }}
        >
          Project
        </Link>
      </Grid>
      <Chip
        caption="Resume"
        borderColor="white"
        fontSize="18px"
        href="https://drive.google.com/file/d/1VqaojaUd3RarrHLOb8h1JJWtAMugoEKr/view?usp=sharing"
        margin="1% 3%"
      />
    </Grid>
  );
}
