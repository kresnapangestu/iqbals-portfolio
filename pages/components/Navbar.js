import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
import { Grid, Button, Menu, MenuItem, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Chip from "./Atoms/Chip";

export default function Navbar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        backgroundSize: "cover",
        zIndex: 99,
      }}
    >
      <Image
        src="/images/logo.png"
        width={props.isMobile ? 80 : 130}
        height={props.isMobile ? 18 : 30}
        alt="Logo Navbar"
        style={{ margin: props.isMobile ? "2% 3%" : "1% 3%" }}
      />
      {!props.isMobile ? (
        <>
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
        </>
      ) : (
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon style={{ color: "white" }} color="disabled" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>
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
            </MenuItem>
            <MenuItem>
              <Link
                href="#works"
                on
                style={{
                  fontSize: 18,
                  behavior: "smooth",
                }}
              >
                Works
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="#project"
                on
                style={{
                  fontSize: 18,
                  behavior: "smooth",
                }}
              >
                Projects
              </Link>
            </MenuItem>
            <Divider />
            <MenuItem>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1VqaojaUd3RarrHLOb8h1JJWtAMugoEKr/view?usp=sharing"
                rel="noopener noreferrer"
                style={{
                  fontSize: 18,
                  behavior: "smooth",
                }}
              >
                Resume
              </a>
            </MenuItem>
          </Menu>
        </div>
      )}
    </Grid>
  );
}
