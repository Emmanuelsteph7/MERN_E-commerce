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

export const marginX = (props) => {
  let style = "";

  let val = propFunc(props, "mx");

  style += mediaQ(props, val, "margin");

  return style;
};

export const marginXTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "mx");

  style += mediaQTab(props, val, "margin");

  return style;
};

export const marginXMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "mx");

  style += mediaQMd(props, val, "margin");

  return style;
};

export const marginXSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "mx");

  style += mediaQSm(props, val, "margin");

  return style;
};

export const marginXXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "mx");

  style += mediaQXs(props, val, "margin");

  return style;
};
