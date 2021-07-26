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

export const flexColumn = (props) => {
  let style = "";

  let val = flexFunc(props, "column");

  style += flexMediaQ(props, val);

  return style;
};

export const flexColumnTab = (props) => {
  let style = "";

  let val = flexFuncTab(props, "column");

  style += flexMediaQTab(props, val);

  return style;
};

export const flexColumnMd = (props) => {
  let style = "";

  let val = flexFuncMd(props, "column");

  style += flexMediaQMd(props, val);

  return style;
};

export const flexColumnSm = (props) => {
  let style = "";

  let val = flexFuncSm(props, "column");

  style += flexMediaQSm(props, val);

  return style;
};

export const flexColumnXs = (props) => {
  let style = "";

  let val = flexFuncXs(props, "column");

  style += flexMediaQXs(props, val);

  return style;
};
