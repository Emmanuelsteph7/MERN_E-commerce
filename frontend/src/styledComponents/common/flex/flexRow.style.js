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

export const flexRow = (props) => {
  let style = "";

  let val = flexFunc(props, "row");

  style += flexMediaQ(props, val);

  return style;
};

export const flexRowTab = (props) => {
  let style = "";

  let val = flexFuncTab(props, "row");

  style += flexMediaQTab(props, val);

  return style;
};

export const flexRowMd = (props) => {
  let style = "";

  let val = flexFuncMd(props, "row");

  style += flexMediaQMd(props, val);

  return style;
};

export const flexRowSm = (props) => {
  let style = "";

  let val = flexFuncSm(props, "row");

  style += flexMediaQSm(props, val);

  return style;
};

export const flexRowXs = (props) => {
  let style = "";

  let val = flexFuncXs(props, "row");

  style += flexMediaQXs(props, val);

  return style;
};
