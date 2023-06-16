import React, { useState, useContext, createContext } from "react";
import { Box } from "@mui/material";

const Cursor = () => {
  const { cursorType } = useContext(MouseContext);

  const useMousePosition = () => {
    const [x, setX] = useState();
    const [y, setY] = useState();

    React.useEffect(() => {
      const updateMousePosition = (ev) => {
        setX(ev.clientX);
        setY(ev.clientY);
      };

      window.addEventListener("mousemove", updateMousePosition);

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);

    return { x, y };
  };

  const { x, y } = useMousePosition();

  return (
    <Box style={{ display: "block" }}>
      <div
        className={`ring ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      />
    </Box>
  );
};

export const MouseContext = createContext({
  cursorType: "",
  cursorChangeHandler: (_cursorType) => {},
});

export default Cursor;
