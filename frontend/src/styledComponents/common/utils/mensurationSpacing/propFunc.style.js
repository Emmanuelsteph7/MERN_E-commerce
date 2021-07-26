const propLogic = (arg1, arg2) => {
  let keys = Object.keys(arg1);

  let val = [];

  // loop through the props in a component
  for (const key of keys) {
    if (key.startsWith(arg2)) {
      let split = key.slice(arg2.length, key.length);
      if (Number(split)) {
        val.push({
          screenP: key,
          arg: arg2,
          value: `${split}%`,
        });
      }

      if (arg2 === "bg" || arg2 === "col") {
        let colors = arg1.theme.color;

        for (const i in colors) {
          if (split === i) {
            val.push({
              screenP: key,
              arg: arg2,
              value: colors[i],
            });
          }
        }
      }

      if (arg2 === "fs") {
        let fontGroup = arg1.theme.font;

        for (const group in fontGroup) {
          if (split === group) {
            val.push({
              screenP: key,
              arg: arg2,
              value: fontGroup[group].fontSize,
              value2: fontGroup[group].fontWeight,
            });
          }
        }

        if (typeof arg1[key] === "string" && Number(arg1[key])) {
          val.push({
            screenP: key,
            arg: arg2,
            value: `${arg1[key]}rem`,
          });
        }
      }

      if (
        key === arg2 &&
        (arg2 === "absolute" ||
          arg2 === "relative" ||
          arg2 === "static" ||
          arg2 === "fixed" ||
          arg2 === "sticky")
      ) {
        val.push({
          screenP: key,
          arg: arg2,
        });
      }

      // check if px is passed
      if (split.endsWith("px")) {
        let newVal = split.slice(0, split.length - 2);
        if (Number(newVal) || newVal === "0") {
          val.push({
            screenP: key,
            arg: arg2,
            value: `${newVal}px`,
          });
        }
      }

      // check if vw is passed for width
      if (split.endsWith("vw")) {
        let newVal = split.slice(0, split.length - 2);
        if (Number(newVal) || newVal === "0") {
          val.push({
            screenP: key,
            arg: arg2,
            value: `${newVal}vw`,
          });
        }
      }

      // check if vh is passed for height
      if (split.endsWith("vh")) {
        let newVal = split.slice(0, split.length - 2);
        if (Number(newVal) || newVal === "0") {
          val.push({
            screenP: key,
            arg: arg2,
            value: `${newVal}vh`,
          });
        }
      }

      if (split.endsWith("rem")) {
        let newVal = split.slice(0, split.length - 3);
        if (Number(newVal) || newVal === "0") {
          val.push({
            screenP: key,
            arg: arg2,
            value: `${newVal}rem`,
          });
        }
      }

      if (split.endsWith("em")) {
        let newVal = split.slice(0, split.length - 2);
        if (Number(newVal) || newVal === "0") {
          val.push({
            screenP: key,
            arg: arg2,
            value: `${newVal}em`,
          });
        }
      }
    }
  }

  return val;
};

const propLogic2 = (arg1, arg2, view) => {
  let keys = Object.keys(arg1);

  let val = [];

  // loop through the props in a component
  for (const key of keys) {
    if (key.startsWith(arg2)) {
      let split = key.slice(arg2.length, key.length);
      if (split.startsWith(view)) {
        let newVal = split.slice(view.length, split.length);

        if (Number(newVal)) {
          val.push({
            screenP: key,
            arg: arg2,
            value: `${newVal}%`,
          });
        }

        if (
          split === view &&
          (arg2 === "absolute" ||
            arg2 === "relative" ||
            arg2 === "static" ||
            arg2 === "fixed" ||
            arg2 === "sticky")
        ) {
          val.push({
            screenP: key,
            arg: arg2,
          });
        }

        // check if px is passed
        if (newVal.endsWith("px")) {
          let newVal2 = newVal.slice(0, newVal.length - 2);
          if (Number(newVal2)) {
            val.push({
              screenP: key,
              arg: arg2,
              value: `${newVal2}px`,
            });
          }
        }

        // check if vw is passed for width
        if (newVal.endsWith("vw")) {
          let newVal2 = newVal.slice(0, newVal.length - 2);
          if (Number(newVal2)) {
            val.push({
              screenP: key,
              arg: arg2,
              value: `${newVal2}vw`,
            });
          }
        }

        // check if vh is passed for height
        if (newVal.endsWith("vh")) {
          let newVal2 = newVal.slice(0, newVal.length - 2);
          if (Number(newVal2)) {
            val.push({
              screenP: key,
              arg: arg2,
              value: `${newVal2}vh`,
            });
          }
        }

        if (newVal.endsWith("rem")) {
          let newVal2 = newVal.slice(0, newVal.length - 3);
          if (Number(newVal2) || newVal2 === "0") {
            val.push({
              screenP: key,
              arg: arg2,
              value: `${newVal2}rem`,
            });
          }
        }

        if (newVal.endsWith("em")) {
          let newVal2 = newVal.slice(0, newVal.length - 2);
          if (Number(newVal2) || newVal2 === "0") {
            val.push({
              screenP: key,
              arg: arg2,
              value: `${newVal2}em`,
            });
          }
        }
      }
    }
  }

  return val;
};

export const propFunc = (arg1, arg2) => {
  let res = propLogic(arg1, arg2);

  return res;
};

export const propFuncTab = (arg1, arg2) => {
  let res = propLogic2(arg1, arg2, "Tab");

  return res;
};

export const propFuncMd = (arg1, arg2) => {
  let res = propLogic2(arg1, arg2, "Md");

  return res;
};

export const propFuncSm = (arg1, arg2) => {
  let res = propLogic2(arg1, arg2, "Sm");

  return res;
};

export const propFuncXs = (arg1, arg2) => {
  let res = propLogic2(arg1, arg2, "Xs");

  return res;
};
