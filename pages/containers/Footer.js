import styles from "../../styles/Home.module.css";

export default function Footer() {
  return (
    <div id="Footer" className={styles.footer}>
      <a>
        Designed in <b> &nbsp;Figma</b>, built with <b> &nbsp;Next JS&nbsp;</b>{" "}
        & <b> &nbsp;Material</b>, also deployed with <b> &nbsp;Vercel </b>. All
        text is set in the <b> &nbsp;DM Sans&nbsp;</b> typeface.
      </a>
    </div>
  );
}
