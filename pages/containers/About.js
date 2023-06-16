import Image from "next/image";
import Chip from "../components/Atoms/Chip";

import { DM_Sans } from "next/font/google";

const dmsans_bold = DM_Sans({
  weight: "700",
  subsets: ["latin"],
});

export default function About() {
  return (
    <div
      style={{
        color: "black",
        flex: 1,
        padding: "calc(100vw/11) calc(100vw/7)",
      }}
    >
      <span
        className={dmsans_bold.className}
        style={{
          fontSize: 30,
          fontWeight: 900,
          backgroundColor: "#FFF5EB",
          margin: "0 3%",
          padding: "0 1%",
          borderRadius: "30px",
        }}
      >
        About Me{" "}
      </span>
      <div
        style={{
          border: "solid 1px #000",
          borderRadius: "30px",
          margin: "-1% 0",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className={`styledContainer`}
          style={{
            margin: "5%",
          }}
        >
          <Image
            src="/images/profile_photo.webp"
            width={400}
            height={400}
            alt="Profile Photo"
            style={{
              filter: "opacity(1) drop-shadow(0 0 #ffebd7)",
            }}
            className={`styledImage`}
          />
          <div
            className={`overlay`}
            style={{
              padding: "2%",
              borderRadius: "30px",
            }}
          ></div>
        </div>
        <span style={{ fontSize: 20, margin: "3%" }}>
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
          <a className={dmsans_bold.className}>Huawei Tech Investment</a>.
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
              margin: "0 0 3% 0",
            }}
          >
            <Chip
              caption="Javascript"
              textColor="white"
              background="black"
              borderColor="black"
              fontSize="17px"
              margin="2% 2% 0 0"
            />
            <Chip
              caption="React JS"
              textColor="white"
              background="black"
              borderColor="black"
              fontSize="17px"
              margin="2% 2% 0 0"
            />
            <Chip
              caption="Next JS"
              textColor="white"
              background="black"
              borderColor="black"
              fontSize="17px"
              margin="2% 2% 0 0"
            />
          </div>
        </span>
      </div>
    </div>
  );
}
