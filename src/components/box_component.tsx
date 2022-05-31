import "../styles.css";

import { Box } from "@material-ui/core";
import React from "react";

export default function BoxComponent(props: any) {
  const {
    display,
    justifyContent,
    flexDirection,
    style: { border, borderColor, backgroundColor, height, padding, margin },
    children
  } = props;

  return (
    <Box
      display={display}
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      style={{
        border: border,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        height: height,
        padding: padding,
        margin: margin
      }}
    >
      {children}
    </Box>
  );
}
