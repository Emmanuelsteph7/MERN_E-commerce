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

export const paddingBottom = (props) => {
  let style = "";

  let val = propFunc(props, "pb");

  style += mediaQ(props, val, "padding-bottom");

  return style;
};

export const paddingBottomTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "pb");

  style += mediaQTab(props, val, "padding-bottom");

  return style;
};

export const paddingBottomMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "pb");

  style += mediaQMd(props, val, "padding-bottom");

  return style;
};

export const paddingBottomSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "pb");

  style += mediaQSm(props, val, "padding-bottom");

  return style;
};

export const paddingBottomXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "pb");

  style += mediaQXs(props, val, "padding-bottom");

  return style;
};
