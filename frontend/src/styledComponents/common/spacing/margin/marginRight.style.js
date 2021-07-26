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

export const marginRight = (props) => {
  let style = "";

  let val = propFunc(props, "mr");

  style += mediaQ(props, val, "margin-right");

  return style;
};

export const marginRightTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "mr");

  style += mediaQTab(props, val, "margin-right");

  return style;
};

export const marginRightMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "mr");

  style += mediaQMd(props, val, "margin-right");

  return style;
};

export const marginRightSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "mr");

  style += mediaQSm(props, val, "margin-right");

  return style;
};

export const marginRightXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "mr");

  style += mediaQXs(props, val, "margin-right");

  return style;
};
