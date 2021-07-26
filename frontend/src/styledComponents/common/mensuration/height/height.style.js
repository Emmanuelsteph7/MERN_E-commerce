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

export const height = (props) => {
  let style = "";

  let val = propFunc(props, "h");

  style += mediaQ(props, val, "height");

  return style;
};

export const heightTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "h");

  style += mediaQTab(props, val, "height");

  return style;
};

export const heightMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "h");

  style += mediaQMd(props, val, "height");

  return style;
};

export const heightSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "h");

  style += mediaQSm(props, val, "height");

  return style;
};

export const heightXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "h");

  style += mediaQXs(props, val, "height");

  return style;
};
