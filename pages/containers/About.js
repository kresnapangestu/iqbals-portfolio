import Image from "next/image";
import Chip from "../components/Atoms/Chip";
import styles from "../../styles/Home.module.css";

import { DM_Sans } from "next/font/google";

const dmsans_bold = DM_Sans({
  weight: "700",
  subsets: ["latin"],
});

export default function About(props) {
  let fontSize = props.isMobile ? "13px" : "17px";
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "black",
        flex: 1,
        padding: "calc(100vw/11) calc(100vw/7)",
        textAlign: props.isMobile && "center",
        color: "white",
      }}
    >
      <span
        className={dmsans_bold.className + " " + styles.header_2}
        style={{
          fontWeight: 900,
          backgroundColor: "black",
          margin: "0 3%",
          padding: "0 1%",
          borderRadius: "30px",
        }}
      >
        About Me{" "}
      </span>
      <div
        style={{
          border: props.isMobile !== true && "solid 1px #fff",
          borderRadius: "30px",
          margin: "-1% 0",
          display: "flex",
          flexDirection: props.isMobile ? "column" : "row",
          // justifyContent: "space-between",
        }}
      >
        <div
          className={`styledContainer`}
          style={{
            margin: "5%",
          }}
        >
          <Image
            src="/images/profile_photo_yellow.png"
            width={props.isMobile ? 100 : 400}
            height={props.isMobile ? 100 : 400}
            alt="Profile Photo"
            style={{
              filter: "opacity(1) drop-shadow(0 0 #ffebd7)",
              width: props.isMobile && "100%",
              height: props.isMobile && "100%",
              borderRadius: "8%",
            }}
            className={`styledImage`}
          />
          <div
            className={`overlay`}
            style={{
              padding: "2%",
              borderRadius: props.isMobile ? "20px" : "30px",
            }}
          ></div>
        </div>
        <span style={{ margin: "3%", fontSize: props.isMobile ? 14 : 20 }}>
          Loving to interact with computer since childhood makes me had a
          special interest on a computers until i finally choosing to major in
          computer science at the{" "}
          <a className={dmsans_bold.className}>Politeknik Negeri Bandung</a>.
          There i put my life into a rabbit hole of website development.
          Fast-forward, Now I’ve had the privilege of building software for a
          software house and a huge corporation.
          <br></br>
          <br></br>
          My main focus now is building products that well designed and easy to
          use for{" "}
          <a className={dmsans_bold.className}>Huawei Tech Investment</a> as a
          Frontend Developer.
          <br></br>
          <br></br> If i’m away from keyboard i usually go to the local coffee
          shops, gaming with my friends, or listening my playlist on{" "}
          <a
            target="_blank"
            href="https://open.spotify.com/user/kresnaiqbal"
            rel="noopener noreferrer"
            className={dmsans_bold.className}
          >
            Spotify
          </a>
          .<br></br>
          <br></br>
          Here are few technologies i’ve been working recently :
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              margin: "3% 0",
              justifyContent: props.isMobile && "center",
            }}
          >
            <Chip
              caption="React JS"
              textColor="black"
              background="#FFF66B"
              borderColor="#FFF66B"
              fontSize={fontSize}
              margin="2% 2% 0 0"
            />
            <Chip
              caption="Next JS"
              textColor="black"
              background="#FFF66B"
              borderColor="#FFF66B"
              fontSize={fontSize}
              margin="2% 2% 0 0"
            />
          </div>
        </span>
      </div>
    </div>
  );
}
