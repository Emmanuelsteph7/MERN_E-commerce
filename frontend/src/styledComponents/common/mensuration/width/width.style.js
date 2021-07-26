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

export const width = (props) => {
  let style = "";

  let val = propFunc(props, "w");

  style += mediaQ(props, val, "width");

  return style;
};

export const widthTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "w");

  style += mediaQTab(props, val, "width");

  return style;
};

export const widthMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "w");

  style += mediaQMd(props, val, "width");

  return style;
};

export const widthSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "w");

  style += mediaQSm(props, val, "width");

  return style;
};

export const widthXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "w");

  style += mediaQXs(props, val, "width");

  return style;
};
