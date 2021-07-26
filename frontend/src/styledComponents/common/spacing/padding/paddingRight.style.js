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

export const paddingRight = (props) => {
  let style = "";

  let val = propFunc(props, "pr");

  style += mediaQ(props, val, "padding-right");

  return style;
};

export const paddingRightTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "pr");

  style += mediaQTab(props, val, "padding-right");

  return style;
};

export const paddingRightMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "pr");

  style += mediaQMd(props, val, "padding-right");

  return style;
};

export const paddingRightSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "pr");

  style += mediaQSm(props, val, "padding-right");

  return style;
};

export const paddingRightXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "pr");

  style += mediaQXs(props, val, "padding-right");

  return style;
};
