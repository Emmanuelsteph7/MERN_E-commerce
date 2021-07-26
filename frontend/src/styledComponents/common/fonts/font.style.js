import { propFunc, mediaQ } from "../utils";

export const fontSize = (props) => {
  let style = "";

  let val = propFunc(props, "fs");

  style += mediaQ(props, val);

  return style;
};

export const color = (props) => {
  let style = "";

  let val = propFunc(props, "col");

  style += mediaQ(props, val, "color");

  return style;
};
