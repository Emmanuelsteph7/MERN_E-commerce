import {
  flexFunc,
  flexFuncTab,
  flexFuncMd,
  flexFuncSm,
  flexFuncXs,
  flexMediaQ,
  flexMediaQTab,
  flexMediaQMd,
  flexMediaQSm,
  flexMediaQXs,
} from "../utils";

export const flexOrder = (props) => {
  let style = "";

  let val = flexFunc(props, "order");

  style += flexMediaQ(props, val);

  return style;
};

export const flexOrderTab = (props) => {
  let style = "";

  let val = flexFuncTab(props, "order");

  style += flexMediaQTab(props, val);

  return style;
};

export const flexOrderMd = (props) => {
  let style = "";

  let val = flexFuncMd(props, "order");

  style += flexMediaQMd(props, val);

  return style;
};

export const flexOrderSm = (props) => {
  let style = "";

  let val = flexFuncSm(props, "order");

  style += flexMediaQSm(props, val);

  return style;
};

export const flexOrderXs = (props) => {
  let style = "";

  let val = flexFuncXs(props, "order");

  style += flexMediaQXs(props, val);

  return style;
};

export const flexGrow = (props) => {
  let style = "";

  let val = flexFunc(props, "grow");

  style += flexMediaQ(props, val);

  return style;
};

export const flexGrowTab = (props) => {
  let style = "";

  let val = flexFuncTab(props, "grow");

  style += flexMediaQTab(props, val);

  return style;
};

export const flexGrowMd = (props) => {
  let style = "";

  let val = flexFuncMd(props, "grow");

  style += flexMediaQMd(props, val);

  return style;
};

export const flexGrowSm = (props) => {
  let style = "";

  let val = flexFuncSm(props, "grow");

  style += flexMediaQSm(props, val);

  return style;
};

export const flexGrowXs = (props) => {
  let style = "";

  let val = flexFuncXs(props, "grow");

  style += flexMediaQXs(props, val);

  return style;
};

export const flexShrink = (props) => {
  let style = "";

  let val = flexFunc(props, "shrink");

  style += flexMediaQ(props, val);

  return style;
};

export const flexShrinkTab = (props) => {
  let style = "";

  let val = flexFuncTab(props, "shrink");

  style += flexMediaQTab(props, val);

  return style;
};

export const flexShrinkMd = (props) => {
  let style = "";

  let val = flexFuncMd(props, "shrink");

  style += flexMediaQMd(props, val);

  return style;
};

export const flexShrinkSm = (props) => {
  let style = "";

  let val = flexFuncSm(props, "shrink");

  style += flexMediaQSm(props, val);

  return style;
};

export const flexShrinkXs = (props) => {
  let style = "";

  let val = flexFuncXs(props, "shrink");

  style += flexMediaQXs(props, val);

  return style;
};
