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

export const paddingX = (props) => {
  let style = "";

  let val = propFunc(props, "px");

  style += mediaQ(props, val, "padding");

  return style;
};

export const paddingXTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "px");

  style += mediaQTab(props, val, "padding");

  return style;
};

export const paddingXMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "px");

  style += mediaQMd(props, val, "padding");

  return style;
};

export const paddingXSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "px");

  style += mediaQSm(props, val, "padding");

  return style;
};

export const paddingXXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "px");

  style += mediaQXs(props, val, "padding");

  return style;
};
