import Image from "next/image";

export default function Splash(props) {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        textAlign: "center",
        backgroundSize: "cover",
      }}
      className={props.className + ` center_container`}
    >
      <Image
        src="/images/splashScreen.webp"
        width={323}
        height={53}
        alt="Logo Navbar"
      />
    </div>
  );
}
