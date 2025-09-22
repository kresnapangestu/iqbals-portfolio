import styles from "../../styles/Home.module.css";

export default function Footer(props) {
  return (
    <div
      id="Footer"
      className={styles.footer}
      style={{
        width: props.isMobile ? "100%" : "100vw",
        color: "black",
        padding: props.isMobile && "1rem calc(100vw/10)",
      }}
    >
      <div
        style={{
          padding: !props?.isMobile && "3rem 0",
          backgroundColor: !props?.isMobile && "black",
          marginBottom: !props?.isMobile ? "1rem" : "3rem",
          color: !props?.isMobile ? "white" : "black",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span style={{ fontSize: props.isMobile ? 12 : 24 }}>
          Let&apos;s Collaborate! Hit me up at
        </span>
        <span style={{ fontSize: props.isMobile ? 16 : 48, fontWeight: "900" }}>
          mohammadiqbalkresna@gmail.com
        </span>
      </div>
      <span
        style={{
          fontSize: props.isMobile ? 10 : 12,
        }}
      >
        © 2025 All rights reserved. Coded with ❤️ using Next.js <br></br>
        Designed and Developed By <b>Mohammad Iqbal Kresna Pangestu</b>
      </span>
    </div>
  );
}
