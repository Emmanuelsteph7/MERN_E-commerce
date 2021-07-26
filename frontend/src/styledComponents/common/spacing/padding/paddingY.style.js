import {
  propFunc,
  mediaQ,
  propFuncTab,
  mediaQTab,
  propFuncMd,
  mediaQMd,
  propFuncSm,
  mediaQSm,
  propFuncXs,
  mediaQXs,
} from "../../utils";

export const paddingY = (props) => {
  let style = "";

  let val = propFunc(props, "py");

  style += mediaQ(props, val, "padding");

  return style;
};

export const paddingYTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "py");

  style += mediaQTab(props, val, "padding");

  return style;
};

export const paddingYMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "py");

  style += mediaQMd(props, val, "padding");

  return style;
};

export const paddingYSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "py");

  style += mediaQSm(props, val, "padding");

  return style;
};

export const paddingYXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "py");

  style += mediaQXs(props, val, "padding");

  return style;
};
