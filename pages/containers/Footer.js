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
        Designed in <b> &nbsp;Figma</b>, built with <b> &nbsp;Next JS&nbsp;</b>{" "}
        & <b> &nbsp;Material</b>, also deployed with <b> &nbsp;Netlify </b>. All
        text is set in the <b> &nbsp;DM Sans&nbsp;</b> typeface.
      </span>
    </div>
  );
}
