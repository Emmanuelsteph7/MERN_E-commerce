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

export const marginBottom = (props) => {
  let style = "";

  let val = propFunc(props, "mb");

  style += mediaQ(props, val, "margin-bottom");

  return style;
};

export const marginBottomTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "mb");

  style += mediaQTab(props, val, "margin-bottom");

  return style;
};

export const marginBottomMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "mb");

  style += mediaQMd(props, val, "margin-bottom");

  return style;
};

export const marginBottomSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "mb");

  style += mediaQSm(props, val, "margin-bottom");

  return style;
};

export const marginBottomXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "mb");

  style += mediaQXs(props, val, "margin-bottom");

  return style;
};
