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

export const marginY = (props) => {
  let style = "";

  let val = propFunc(props, "my");

  style += mediaQ(props, val, "margin");

  return style;
};

export const marginYTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "my");

  style += mediaQTab(props, val, "margin");

  return style;
};

export const marginYMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "my");

  style += mediaQMd(props, val, "margin");

  return style;
};

export const marginYSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "my");

  style += mediaQSm(props, val, "margin");

  return style;
};

export const marginYXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "my");

  style += mediaQXs(props, val, "margin");

  return style;
};
