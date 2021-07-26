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

export const marginTop = (props) => {
  let style = "";

  let val = propFunc(props, "mt");

  style += mediaQ(props, val, "margin-top");

  return style;
};

export const marginTopTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "mt");

  style += mediaQTab(props, val, "margin-top");

  return style;
};

export const marginTopMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "mt");

  style += mediaQMd(props, val, "margin-top");

  return style;
};

export const marginTopSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "mt");

  style += mediaQSm(props, val, "margin-top");

  return style;
};

export const marginTopXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "mt");

  style += mediaQXs(props, val, "margin-top");

  return style;
};
