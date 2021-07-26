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
} from "../utils";

export const absolute = (props) => {
  let style = "";

  let val = propFunc(props, "absolute");

  style += mediaQ(props, val);

  return style;
};

export const absoluteTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "absolute");

  style += mediaQTab(props, val);

  return style;
};

export const absoluteMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "absolute");

  style += mediaQMd(props, val);

  return style;
};

export const absoluteSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "absolute");

  style += mediaQSm(props, val);

  return style;
};

export const absoluteXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "absolute");

  style += mediaQXs(props, val);

  return style;
};

export const relative = (props) => {
  let style = "";

  let val = propFunc(props, "relative");

  style += mediaQ(props, val);

  return style;
};

export const relativeTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "relative");

  style += mediaQTab(props, val);

  return style;
};

export const relativeMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "relative");

  style += mediaQMd(props, val);

  return style;
};

export const relativeSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "relative");

  style += mediaQSm(props, val);

  return style;
};

export const relativeXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "relative");

  style += mediaQXs(props, val);

  return style;
};

export const staticPos = (props) => {
  let style = "";

  let val = propFunc(props, "static");

  style += mediaQ(props, val);

  return style;
};

export const staticPosTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "static");

  style += mediaQTab(props, val);

  return style;
};

export const staticPosMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "static");

  style += mediaQMd(props, val);

  return style;
};

export const staticPosSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "static");

  style += mediaQSm(props, val);

  return style;
};

export const staticPosXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "static");

  style += mediaQXs(props, val);

  return style;
};

export const fixed = (props) => {
  let style = "";

  let val = propFunc(props, "fixed");

  style += mediaQ(props, val);

  return style;
};

export const fixedTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "fixed");

  style += mediaQTab(props, val);

  return style;
};

export const fixedMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "fixed");

  style += mediaQMd(props, val);

  return style;
};

export const fixedSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "fixed");

  style += mediaQSm(props, val);

  return style;
};

export const fixedXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "fixed");

  style += mediaQXs(props, val);

  return style;
};

export const sticky = (props) => {
  let style = "";

  let val = propFunc(props, "sticky");

  style += mediaQ(props, val);

  return style;
};

export const stickyTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "sticky");

  style += mediaQTab(props, val);

  return style;
};

export const stickyMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "sticky");

  style += mediaQMd(props, val);

  return style;
};

export const stickySm = (props) => {
  let style = "";

  let val = propFuncSm(props, "sticky");

  style += mediaQSm(props, val);

  return style;
};

export const stickyXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "sticky");

  style += mediaQXs(props, val);

  return style;
};

export const left = (props) => {
  let style = "";

  let val = propFunc(props, "l");

  style += mediaQ(props, val, "left");

  return style;
};

export const leftTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "l");

  style += mediaQTab(props, val, "left");

  return style;
};

export const leftMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "l");

  style += mediaQMd(props, val, "left");

  return style;
};

export const leftSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "l");

  style += mediaQSm(props, val, "left");

  return style;
};

export const leftXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "l");

  style += mediaQXs(props, val, "left");

  return style;
};

export const right = (props) => {
  let style = "";

  let val = propFunc(props, "r");

  style += mediaQ(props, val, "right");

  return style;
};

export const rightTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "r");

  style += mediaQTab(props, val, "right");

  return style;
};

export const rightMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "r");

  style += mediaQMd(props, val, "right");

  return style;
};

export const rightSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "r");

  style += mediaQSm(props, val, "right");

  return style;
};

export const rightXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "r");

  style += mediaQXs(props, val, "right");

  return style;
};

export const top = (props) => {
  let style = "";

  let val = propFunc(props, "t");

  style += mediaQ(props, val, "top");

  return style;
};

export const topTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "t");

  style += mediaQTab(props, val, "top");

  return style;
};

export const topMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "t");

  style += mediaQMd(props, val, "top");

  return style;
};

export const topSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "t");

  style += mediaQSm(props, val, "top");

  return style;
};

export const topXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "t");

  style += mediaQXs(props, val, "top");

  return style;
};

export const bottom = (props) => {
  let style = "";

  let val = propFunc(props, "b");

  style += mediaQ(props, val, "bottom");

  return style;
};

export const bottomTab = (props) => {
  let style = "";

  let val = propFuncTab(props, "b");

  style += mediaQTab(props, val, "bottom");

  return style;
};

export const bottomMd = (props) => {
  let style = "";

  let val = propFuncMd(props, "b");

  style += mediaQMd(props, val, "bottom");

  return style;
};

export const bottomSm = (props) => {
  let style = "";

  let val = propFuncSm(props, "b");

  style += mediaQSm(props, val, "bottom");

  return style;
};

export const bottomXs = (props) => {
  let style = "";

  let val = propFuncXs(props, "b");

  style += mediaQXs(props, val, "bottom");

  return style;
};
