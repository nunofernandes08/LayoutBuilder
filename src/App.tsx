import "./styles.css";

import { Grid, Box } from "@material-ui/core";

import BoxComponent from "./components/box_component";
import React from "react";

const myJson = [
  {
    type: "box",
    display: "flex",
    style: {
      border: "4px solid",
      borderColor: "green",
      backgroundColor: "red"
    },
    components: {
      type: "box",
      display: "flex",
      style: {
        border: "2px solid",
        borderColor: "white",
        backgroundColor: "blue",
        padding: 20,
        margin: 20
      }
    }
  }
];

const typeOfComponent = (type: string, props: any) => {
  switch (type) {
    case "box":
      return (
        <BoxComponent {...props}>
          <BoxComponent {...props.components} />
        </BoxComponent>
      );
  }
};

const mount = (type: string, props: any) => {
  const mainComponent = typeOfComponent(type, props);
  return <Box>{mainComponent}</Box>;
};

export default function App() {
  return (
    <>
      {myJson.map((r, index) => {
        const component = mount(r.type, r);
        return <React.Fragment key={index}>{component}</React.Fragment>;
      })}
    </>
  );
}
