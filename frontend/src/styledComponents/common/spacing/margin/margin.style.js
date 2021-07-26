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

export const margin = (props) => {
  let style = "";

  let val = propFunc(props, "m");

  style += mediaQ(props, val, "margin");

  return style;
};

export const marginTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "m");

  style += mediaQTab(props, val, "margin");

  return style;
};

export const marginMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "m");

  style += mediaQMd(props, val, "margin");

  return style;
};

export const marginSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "m");

  style += mediaQSm(props, val, "margin");

  return style;
};

export const marginXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "m");

  style += mediaQXs(props, val, "margin");

  return style;
};
