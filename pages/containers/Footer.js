import styles from "../../styles/Home.module.css";

export default function Footer(props) {
  return (
    <div
      id="Footer"
      className={styles.footer}
      style={{ width: props.isMobile ? "calc(100vw/2)" : "100vw" }}
    >
      <span
        style={{ color: "black", fontSize: 10, padding: "0 calc(100vw/5)" }}
      >
        Designed in <b> &nbsp;Figma</b>, built with <b> &nbsp;Next JS&nbsp;</b>{" "}
        & <b> &nbsp;Material</b>, also deployed with <b> &nbsp;Vercel </b>. All
        text is set in the <b> &nbsp;DM Sans&nbsp;</b> typeface.
      </span>
    </div>
  );
}
