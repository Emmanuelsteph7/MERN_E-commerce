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

export const padding = (props) => {
  let style = "";

  let val = propFunc(props, "p");

  style += mediaQ(props, val, "padding");

  return style;
};

export const paddingTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "p");

  style += mediaQTab(props, val, "padding");

  return style;
};

export const paddingMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "p");

  style += mediaQMd(props, val, "padding");

  return style;
};

export const paddingSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "p");

  style += mediaQSm(props, val, "padding");

  return style;
};

export const paddingXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "p");

  style += mediaQXs(props, val, "padding");

  return style;
};
