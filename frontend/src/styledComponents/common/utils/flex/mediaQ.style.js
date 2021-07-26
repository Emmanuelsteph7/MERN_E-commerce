export const flexMediaQ = (props, val) => {
  let style = "";

  if (val.length > 0) {
    val.forEach((value) => {
      style += props[value.screenP]
        ? `
    ${value.arg ? "display: flex" : ""};
    ${value.arg ? `flex-direction: ${value.arg}` : ""};
    ${value.wrap ? `flex-wrap: ${value.wrap}` : ""};
    ${value.order ? `order: ${value.order}` : ""};
    ${value.grow ? `flex-grow: ${value.grow}` : ""};
    ${value.shrink ? `flex-shrink: ${value.shrink}` : ""};
      ${value.jV ? `justify-content: ${value.jV}` : ""};
      ${value.aV ? `align-items: ${value.aV}` : ""};
    `
        : "";
    });
  }

  return style;
};

export const flexMediaQTab = (props, val) => {
  let style = "";

  if (val.length > 0) {
    val.forEach((value) => {
      style += props[value.screenP]
        ? `
    ${value.arg ? "display: flex" : ""};
    ${value.arg ? `flex-direction: ${value.arg}` : ""};
    ${value.wrap ? `flex-wrap: ${value.wrap}` : ""};
    ${value.order ? `order: ${value.order}` : ""};
    ${value.grow ? `flex-grow: ${value.grow}` : ""};
    ${value.shrink ? `flex-shrink: ${value.shrink}` : ""};
      ${value.jV ? `justify-content: ${value.jV}` : ""};
      ${value.aV ? `align-items: ${value.aV}` : ""};
    `
        : "";
    });
  }

  return style;
};

export const flexMediaQMd = (props, val) => {
  let style = "";

  if (val.length > 0) {
    val.forEach((value) => {
      style += props[value.screenP]
        ? `
    ${value.arg ? "display: flex" : ""};
    ${value.arg ? `flex-direction: ${value.arg}` : ""};
    ${value.wrap ? `flex-wrap: ${value.wrap}` : ""};
    ${value.order ? `order: ${value.order}` : ""};
    ${value.grow ? `flex-grow: ${value.grow}` : ""};
    ${value.shrink ? `flex-shrink: ${value.shrink}` : ""};
      ${value.jV ? `justify-content: ${value.jV}` : ""};
      ${value.aV ? `align-items: ${value.aV}` : ""};
    `
        : "";
    });
  }

  return style;
};

export const flexMediaQSm = (props, val) => {
  let style = "";

  if (val.length > 0) {
    val.forEach((value) => {
      style += props[value.screenP]
        ? `
    ${value.arg ? "display: flex" : ""};
    ${value.arg ? `flex-direction: ${value.arg}` : ""};
    ${value.wrap ? `flex-wrap: ${value.wrap}` : ""};
    ${value.order ? `order: ${value.order}` : ""};
    ${value.grow ? `flex-grow: ${value.grow}` : ""};
    ${value.shrink ? `flex-shrink: ${value.shrink}` : ""};
      ${value.jV ? `justify-content: ${value.jV}` : ""};
      ${value.aV ? `align-items: ${value.aV}` : ""};
    `
        : "";
    });
  }

  return style;
};

export const flexMediaQXs = (props, val) => {
  let style = "";

  if (val.length > 0) {
    val.forEach((value) => {
      style += props[value.screenP]
        ? `
    ${value.arg ? "display: flex" : ""};
    ${value.arg ? `flex-direction: ${value.arg}` : ""};
    ${value.wrap ? `flex-wrap: ${value.wrap}` : ""};
    ${value.order ? `order: ${value.order}` : ""};
    ${value.grow ? `flex-grow: ${value.grow}` : ""};
    ${value.shrink ? `flex-shrink: ${value.shrink}` : ""};
      ${value.jV ? `justify-content: ${value.jV}` : ""};
      ${value.aV ? `align-items: ${value.aV}` : ""};
    `
        : "";
    });
  }

  return style;
};
