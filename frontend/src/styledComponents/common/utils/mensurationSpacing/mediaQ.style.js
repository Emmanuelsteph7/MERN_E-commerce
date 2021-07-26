export const mediaQ = (props, val, property) => {
  let style = "";

  if (val.length > 0) {
    val.forEach((value) => {
      if (value.arg.endsWith("x")) {
        style += props[value.screenP]
          ? `
        ${property}-left: ${value.value};
        ${property}-right: ${value.value};
        `
          : "";
      } else if (
        value.arg === "static" ||
        value.arg === "relative" ||
        value.arg === "absolute" ||
        value.arg === "fixed" ||
        value.arg === "sticky"
      ) {
        style += props[value.screenP]
          ? `
        position: ${value.arg};
        `
          : "";
      } else if (value.arg === "bg" || value.arg === "col") {
        style += props[value.screenP]
          ? `
        ${property}: ${value.value};
        `
          : "";
      } else if (value.arg === "fs") {
        style += props[value.screenP]
          ? `
          ${value.value ? `font-size: ${value.value}` : ""};
          ${value.value2 ? `font-weight: ${value.value2}` : ""};
        `
          : "";
      } else if (value.arg.endsWith("y")) {
        style += props[value.screenP]
          ? `
        ${property}-top: ${value.value};
        ${property}-bottom: ${value.value};
        `
          : "";
      } else {
        style += props[value.screenP]
          ? `
        ${property}: ${value.value};
        `
          : "";
      }
    });
  }

  return style;
};

export const mediaQTab = (props, val, property) => {
  let style = "";

  // if (val.arg.endsWith("x")) {
  //   style += props[val.tabletProp]
  //     ? `
  //   ${property}-left: ${val.tabletWidth};
  //   ${property}-right: ${val.tabletWidth};
  //   `
  //     : "";
  // } else if (val.arg.endsWith("y")) {
  //   style += props[val.tabletProp]
  //     ? `
  //   ${property}-top: ${val.tabletWidth};
  //   ${property}-bottom: ${val.tabletWidth};
  //   `
  //     : "";
  // } else {
  //   style += props[val.tabletProp]
  //     ? `
  //   ${property}: ${val.tabletWidth};
  //   `
  //     : "";
  // }

  if (val.length > 0) {
    val.forEach((value) => {
      if (value.arg.endsWith("x")) {
        style += props[value.screenP]
          ? `
        ${property}-left: ${value.value};
        ${property}-right: ${value.value};
        `
          : "";
      } else if (
        value.arg === "static" ||
        value.arg === "relative" ||
        value.arg === "absolute" ||
        value.arg === "fixed" ||
        value.arg === "sticky"
      ) {
        style += props[value.screenP]
          ? `
        position: ${value.arg};
        `
          : "";
      } else if (value.arg.endsWith("y")) {
        style += props[value.screenP]
          ? `
        ${property}-top: ${value.value};
        ${property}-bottom: ${value.value};
        `
          : "";
      } else {
        style += props[value.screenP]
          ? `
        ${property}: ${value.value};
        `
          : "";
      }
    });
  }

  return style;
};

export const mediaQMd = (props, val, property) => {
  let style = "";

  // if (val.arg.endsWith("x")) {
  //   style += props[val.minTabletProp]
  //     ? `
  //   ${property}-left: ${val.minTabletWidth};
  //   ${property}-right: ${val.minTabletWidth};
  //   `
  //     : "";
  // } else if (val.arg.endsWith("y")) {
  //   style += props[val.minTabletProp]
  //     ? `
  //   ${property}-top: ${val.minTabletWidth};
  //   ${property}-bottom: ${val.minTabletWidth};
  //   `
  //     : "";
  // } else {
  //   style += props[val.minTabletProp]
  //     ? `
  //   ${property}: ${val.minTabletWidth};
  //   `
  //     : "";
  // }

  if (val.length > 0) {
    val.forEach((value) => {
      if (value.arg.endsWith("x")) {
        style += props[value.screenP]
          ? `
        ${property}-left: ${value.value};
        ${property}-right: ${value.value};
        `
          : "";
      } else if (
        value.arg === "static" ||
        value.arg === "relative" ||
        value.arg === "absolute" ||
        value.arg === "fixed" ||
        value.arg === "sticky"
      ) {
        style += props[value.screenP]
          ? `
        position: ${value.arg};
        `
          : "";
      } else if (value.arg.endsWith("y")) {
        style += props[value.screenP]
          ? `
        ${property}-top: ${value.value};
        ${property}-bottom: ${value.value};
        `
          : "";
      } else {
        style += props[value.screenP]
          ? `
        ${property}: ${value.value};
        `
          : "";
      }
    });
  }

  return style;
};

export const mediaQSm = (props, val, property) => {
  let style = "";

  // if (val.arg.endsWith("x")) {
  //   style += props[val.largeMobProp]
  //     ? `
  //   ${property}-left: ${val.largeMobWidth};
  //   ${property}-right: ${val.largeMobWidth};
  //   `
  //     : "";
  // } else if (val.arg.endsWith("y")) {
  //   style += props[val.largeMobProp]
  //     ? `
  //   ${property}-top: ${val.largeMobWidth};
  //   ${property}-bottom: ${val.largeMobWidth};
  //   `
  //     : "";
  // } else {
  //   style += props[val.largeMobProp]
  //     ? `
  //   ${property}: ${val.largeMobWidth};
  //   `
  //     : "";
  // }

  if (val.length > 0) {
    val.forEach((value) => {
      if (value.arg.endsWith("x")) {
        style += props[value.screenP]
          ? `
        ${property}-left: ${value.value};
        ${property}-right: ${value.value};
        `
          : "";
      } else if (
        value.arg === "static" ||
        value.arg === "relative" ||
        value.arg === "absolute" ||
        value.arg === "fixed" ||
        value.arg === "sticky"
      ) {
        style += props[value.screenP]
          ? `
        position: ${value.arg};
        `
          : "";
      } else if (value.arg.endsWith("y")) {
        style += props[value.screenP]
          ? `
        ${property}-top: ${value.value};
        ${property}-bottom: ${value.value};
        `
          : "";
      } else {
        style += props[value.screenP]
          ? `
        ${property}: ${value.value};
        `
          : "";
      }
    });
  }

  return style;
};

export const mediaQXs = (props, val, property) => {
  let style = "";

  // if (val.arg.endsWith("x")) {
  //   style += props[val.mobileProp]
  //     ? `
  //   ${property}-left: ${val.mobileWidth};
  //   ${property}-right: ${val.mobileWidth};
  //   `
  //     : "";
  // } else if (val.arg.endsWith("y")) {
  //   style += props[val.mobileProp]
  //     ? `
  //   ${property}-top: ${val.mobileWidth};
  //   ${property}-bottom: ${val.mobileWidth};
  //   `
  //     : "";
  // } else {
  //   style += props[val.mobileProp]
  //     ? `
  //   ${property}: ${val.mobileWidth};
  //   `
  //     : "";
  // }

  if (val.length > 0) {
    val.forEach((value) => {
      if (value.arg.endsWith("x")) {
        style += props[value.screenP]
          ? `
        ${property}-left: ${value.value};
        ${property}-right: ${value.value};
        `
          : "";
      } else if (
        value.arg === "static" ||
        value.arg === "relative" ||
        value.arg === "absolute" ||
        value.arg === "fixed" ||
        value.arg === "sticky"
      ) {
        style += props[value.screenP]
          ? `
        position: ${value.arg};
        `
          : "";
      } else if (value.arg.endsWith("y")) {
        style += props[value.screenP]
          ? `
        ${property}-top: ${value.value};
        ${property}-bottom: ${value.value};
        `
          : "";
      } else {
        style += props[value.screenP]
          ? `
        ${property}: ${value.value};
        `
          : "";
      }
    });
  }

  return style;
};
