import styles from "../../styles/Home.module.css";

export default function Footer(props) {
  return (
    <div
      id="Footer"
      className={styles.footer}
      style={{
        width: props.isMobile ? "100%" : "100vw",
        color: "black",
        fontSize: props.isMobile && 15,
        padding: props.isMobile && "1rem calc(100vw/10)",
      }}
    >
      <span>
        Designed in <b>Figma</b>, built with <b>Next JS</b> & <b>Material</b>,
        also deployed with <b>Netlify</b>. All text is set in the{" "}
        <b> DM Sans</b> typeface.
      </span>
    </div>
  );
}
