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

export const marginLeft = (props) => {
  let style = "";

  let val = propFunc(props, "ml");

  style += mediaQ(props, val, "margin-left");

  return style;
};

export const marginLeftTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "ml");

  style += mediaQTab(props, val, "margin-left");

  return style;
};

export const marginLeftMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "ml");

  style += mediaQMd(props, val, "margin-left");

  return style;
};

export const marginLeftSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "ml");

  style += mediaQSm(props, val, "margin-left");

  return style;
};

export const marginLeftXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "ml");

  style += mediaQXs(props, val, "margin-left");

  return style;
};
