import { propFunc, mediaQ } from "../utils";

export const backgroundColor = (props) => {
  let style = "";

  let val = propFunc(props, "bg");

  style += mediaQ(props, val, "background-color");

  return style;
};

export const color = (props) => {
  let style = "";

  let val = propFunc(props, "col");

  style += mediaQ(props, val, "color");

  return style;
};
