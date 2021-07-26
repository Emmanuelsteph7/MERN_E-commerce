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

export const paddingLeft = (props) => {
  let style = "";

  let val = propFunc(props, "pl");

  style += mediaQ(props, val, "padding-left");

  return style;
};

export const paddingLeftTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "pl");

  style += mediaQTab(props, val, "padding-left");

  return style;
};

export const paddingLeftMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "pl");

  style += mediaQMd(props, val, "padding-left");

  return style;
};

export const paddingLeftSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "pl");

  style += mediaQSm(props, val, "padding-left");

  return style;
};

export const paddingLeftXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "pl");

  style += mediaQXs(props, val, "padding-left");

  return style;
};
