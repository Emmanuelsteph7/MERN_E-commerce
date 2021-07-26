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

export const paddingTop = (props) => {
  let style = "";

  let val = propFunc(props, "pt");

  style += mediaQ(props, val, "padding-top");

  return style;
};

export const paddingTopTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "pt");

  style += mediaQTab(props, val, "padding-top");

  return style;
};

export const paddingTopMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "pt");

  style += mediaQMd(props, val, "padding-top");

  return style;
};

export const paddingTopSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "pt");

  style += mediaQSm(props, val, "padding-top");

  return style;
};

export const paddingTopXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "pt");

  style += mediaQXs(props, val, "padding-top");

  return style;
};
