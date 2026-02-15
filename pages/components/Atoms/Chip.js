import { Grid } from "@mui/material";

export default function Chip(props) {
  return (
    <Grid style={{ margin: props.margin }}>
      <a
        className={`hover:text-yellow-300 border border-white hover:border-yellow-300`}
        target="_blank"
        href={props.href}
        rel="noopener noreferrer"
        style={{
          fontSize: `${props.fontSize || "18px"}`,
          padding: "3px 20px",
          color: `${props.textColor}`,
          background: `${props.background}`,
          borderRadius: "20px",
        }}
      >
        {props.caption}
      </a>
    </Grid>
  );
}
