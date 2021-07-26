const valFunc = (str) => {
  let value = "";
  let justifyValues = ["B", "A", "C", "End", "Start", "E", "Str", "Base"];
  for (const val of justifyValues) {
    if (str === val) {
      switch (str) {
        case "B":
          value += "space-between";
          break;
        case "A":
          value += "space-around";
          break;
        case "C":
          value += "center";
          break;
        case "End":
          value += "flex-end";
          break;
        case "Start":
          value += "flex-start";
          break;
        case "E":
          value += "space-evenly";
          break;
        case "Str":
          value += "stretch";
          break;
        case "Base":
          value += "baseline";
          break;

        default:
          value += "";
          break;
      }
    }
  }

  return value;
};

const flexLogic = (arg1, arg2) => {
  let keys = Object.keys(arg1);

  let val = [];

  // loop through the props in a component
  for (const key of keys) {
    if (key.startsWith(arg2)) {
      let split = key.slice(arg2.length, key.length);
      if (key === arg2) {
        val.push({
          screenP: key,
          arg: arg2,
        });
      }

      if (arg2 === "order") {
        if (Number(split)) {
          val.push({
            screenP: key,
            order: Number(split),
          });
        }
      }

      if (arg2 === "grow") {
        if (Number(split)) {
          val.push({
            screenP: key,
            grow: Number(split),
          });
        }
      }

      if (arg2 === "shrink") {
        if (Number(split)) {
          val.push({
            screenP: key,
            shrink: Number(split),
          });
        }
      }

      if (split.startsWith("J")) {
        let newVal = split.slice(1, split.length);

        if (valFunc(newVal)) {
          val.push({
            screenP: key,
            arg: arg2,
            jV: valFunc(newVal),
          });
        }

        if (newVal.length > 1 && newVal.lastIndexOf("A") > 0) {
          let newVal2 = newVal.slice(
            newVal.lastIndexOf("A") + 1,
            newVal.length
          );

          let newVal3 = newVal.slice(0, newVal.lastIndexOf("A"));

          val.push({
            screenP: key,
            arg: arg2,
            aV: valFunc(newVal2),
            jV: valFunc(newVal3),
          });
        }
      }

      if (split.startsWith("A")) {
        let newVal = split.slice(1, split.length);
        val.push({
          screenP: key,
          arg: arg2,
          aV: valFunc(newVal),
        });
      }

      if (split.startsWith("W")) {
        let newVal = split.slice(1, split.length);

        if (split === "W") {
          val.push({
            screenP: key,
            arg: arg2,
            wrap: "wrap",
          });
        }

        if (newVal.startsWith("J")) {
          let newVal2 = newVal.slice(1, newVal.length);

          if (valFunc(newVal2)) {
            val.push({
              screenP: key,
              arg: arg2,
              wrap: "wrap",
              jV: valFunc(newVal2),
            });
          }

          if (newVal.length > 1 && newVal.lastIndexOf("A") > 0) {
            let newVal3 = newVal2.slice(
              newVal2.lastIndexOf("A") + 1,
              newVal2.length
            );

            let newVal4 = newVal2.slice(0, newVal2.lastIndexOf("A"));

            val.push({
              screenP: key,
              arg: arg2,
              aV: valFunc(newVal3),
              wrap: "wrap",
              jV: valFunc(newVal4),
            });
          }
        }

        if (newVal.startsWith("A")) {
          let newVal2 = newVal.slice(1, newVal.length);

          valFunc.push({
            screenP: key,
            arg: arg2,
            wrap: "wrap",
            aV: valFunc(newVal2),
          });
        }
      }

      if (split.startsWith("N")) {
        let newVal = split.slice(1, split.length);

        if (split === "N") {
          val.push({
            screenP: key,
            arg: arg2,
            wrap: "nowrap",
          });
        }

        if (newVal.startsWith("J")) {
          let newVal2 = newVal.slice(1, newVal.length);

          if (valFunc(newVal2)) {
            val.push({
              screenP: key,
              arg: arg2,
              wrap: "nowrap",
              jV: valFunc(newVal2),
            });
          }

          if (newVal.length > 1 && newVal.lastIndexOf("A") > 0) {
            let newVal3 = newVal2.slice(
              newVal2.lastIndexOf("A") + 1,
              newVal2.length
            );

            let newVal4 = newVal2.slice(0, newVal2.lastIndexOf("A"));

            val.push({
              screenP: key,
              arg: arg2,
              aV: valFunc(newVal3),
              wrap: "nowrap",
              jV: valFunc(newVal4),
            });
          }
        }

        if (newVal.startsWith("A")) {
          let newVal2 = newVal.slice(1, newVal.length);

          valFunc.push({
            screenP: key,
            arg: arg2,
            wrap: "nowrap",
            aV: valFunc(newVal2),
          });
        }
      }
    }
  }
  // console.log(val);

  return val;
};

const flexLogic2 = (arg1, arg2, view) => {
  let keys = Object.keys(arg1);

  let val = [];

  // loop through the props in a component
  for (const key of keys) {
    if (key.startsWith(arg2)) {
      let split = key.slice(arg2.length, key.length);

      if (split.startsWith(view)) {
        let newVal = split.slice(view.length, split.length);

        if (split === view) {
          val.push({
            screenP: key,
            arg: arg2,
          });
        }

        if (arg2 === "order") {
          if (Number(newVal)) {
            val.push({
              screenP: key,
              order: Number(newVal),
            });
          }
        }

        if (arg2 === "grow") {
          if (Number(newVal)) {
            val.push({
              screenP: key,
              grow: Number(newVal),
            });
          }
        }

        if (arg2 === "shrink") {
          if (Number(newVal)) {
            val.push({
              screenP: key,
              shrink: Number(newVal),
            });
          }
        }

        if (newVal.startsWith("J")) {
          let newVal2 = newVal.slice(1, split.length);

          if (valFunc(newVal2)) {
            val.push({
              screenP: key,
              arg: arg2,
              jV: valFunc(newVal2),
            });
          }

          if (newVal2.length > 1 && newVal2.lastIndexOf("A") > 0) {
            let newVal3 = newVal2.slice(
              newVal2.lastIndexOf("A") + 1,
              newVal2.length
            );
            // aP += "align-items";
            // aV += valFunc(newVal3);

            // screenP += key;
            // arg += arg2;

            let newVal4 = newVal2.slice(0, newVal2.lastIndexOf("A"));
            // console.log(newVal2);
            // jP += "justify-content";
            // jV += valFunc(newVal4);

            val.push({
              screenP: key,
              arg: arg2,
              aV: valFunc(newVal3),
              jV: valFunc(newVal4),
            });
          }
        }

        if (newVal.startsWith("A")) {
          let newVal2 = newVal.slice(1, split.length);

          val.push({
            screenP: key,
            arg: arg2,
            aV: valFunc(newVal2),
          });
        }

        if (newVal.startsWith("W")) {
          let newVal2 = newVal.slice(1, newVal.length);

          if (newVal === "W") {
            val.push({
              screenP: key,
              arg: arg2,
              wrap: "wrap",
            });
          }

          if (newVal2.startsWith("J")) {
            let newVal3 = newVal2.slice(1, newVal2.length);

            if (valFunc(newVal3)) {
              val.push({
                screenP: key,
                arg: arg2,
                wrap: "wrap",
                jV: valFunc(newVal3),
              });
            }

            if (newVal2.length > 1 && newVal2.lastIndexOf("A") > 0) {
              let newVal4 = newVal3.slice(
                newVal3.lastIndexOf("A") + 1,
                newVal3.length
              );

              let newVal5 = newVal3.slice(0, newVal3.lastIndexOf("A"));

              val.push({
                screenP: key,
                arg: arg2,
                aV: valFunc(newVal4),
                wrap: "wrap",
                jV: valFunc(newVal5),
              });
            }
          }

          if (newVal2.startsWith("A")) {
            let newVal3 = newVal2.slice(1, newVal2.length);

            valFunc.push({
              screenP: key,
              arg: arg2,
              wrap: "wrap",
              aV: valFunc(newVal3),
            });
          }
        }

        if (newVal.startsWith("N")) {
          let newVal2 = newVal.slice(1, newVal.length);

          if (newVal === "N") {
            val.push({
              screenP: key,
              arg: arg2,
              wrap: "nowrap",
            });
          }

          if (newVal2.startsWith("J")) {
            let newVal3 = newVal2.slice(1, newVal2.length);

            if (valFunc(newVal3)) {
              val.push({
                screenP: key,
                arg: arg2,
                wrap: "nowrap",
                jV: valFunc(newVal3),
              });
            }

            if (newVal2.length > 1 && newVal2.lastIndexOf("A") > 0) {
              let newVal4 = newVal3.slice(
                newVal3.lastIndexOf("A") + 1,
                newVal3.length
              );

              let newVal5 = newVal3.slice(0, newVal3.lastIndexOf("A"));

              val.push({
                screenP: key,
                arg: arg2,
                aV: valFunc(newVal4),
                wrap: "nowrap",
                jV: valFunc(newVal5),
              });
            }
          }

          if (newVal2.startsWith("A")) {
            let newVal3 = newVal2.slice(1, newVal2.length);

            val.push({
              screenP: key,
              arg: arg2,
              wrap: "nowrap",
              aV: valFunc(newVal3),
            });
          }
        }
      }
    }
  }

  return val;
};

export const flexFunc = (arg1, arg2) => {
  let res = flexLogic(arg1, arg2);

  return res;
};

export const flexFuncTab = (arg1, arg2) => {
  let res = flexLogic2(arg1, arg2, "Tab");

  return res;
};

export const flexFuncMd = (arg1, arg2) => {
  let res = flexLogic2(arg1, arg2, "Md");

  return res;
};

export const flexFuncSm = (arg1, arg2) => {
  let res = flexLogic2(arg1, arg2, "Sm");

  return res;
};

export const flexFuncXs = (arg1, arg2) => {
  let res = flexLogic2(arg1, arg2, "Xs");

  return res;
};
