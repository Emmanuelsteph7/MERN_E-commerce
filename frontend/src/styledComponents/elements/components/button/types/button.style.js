import styled, { css } from "styled-components";
import { general } from "../../../../common";

export const Btn = styled.button`
  border: none;
  outline: none;
  text-decoration: none;
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  ${(props) => {
    let style = "";
    let propValues = Object.keys(props);

    for (const val of propValues) {
      let groups = props.theme.btn;
      let keys = Object.keys(groups);

      for (const key of keys) {
        if (val === key) {
          console.log(key);
          let keyData = groups[key];
          style += `
              ${
                keyData
                  ? `
                  ${keyData.bg ? `background-color: ${keyData.bg};` : ""}
                  ${keyData.bgImg ? `background-image: ${keyData.bgImg};` : ""}
                  ${keyData.color ? `color: ${keyData.color};` : ""}
                  ${
                    keyData.borderRadius
                      ? `border-radius: ${keyData.borderRadius};`
                      : ""
                  }
                  ${keyData.border ? `border: ${keyData.border};` : ""}
                  ${keyData.padding ? `padding: ${keyData.padding};` : ""}
                  ${keyData.shadow ? `box-shadow: ${keyData.shadow};` : ""}
                  `
                  : ""
              }

              &:hover {
                ${
                  keyData.hover
                    ? `
                    ${
                      keyData.hover.bg
                        ? `background-color: ${keyData.hover.bg};`
                        : ""
                    }
                    ${
                      keyData.hover.bgImg
                        ? `background-image: ${keyData.hover.bgImg};`
                        : ""
                    }
                    ${
                      keyData.hover.color
                        ? `color: ${keyData.hover.color};`
                        : ""
                    }
                    ${
                      keyData.hover.borderRadius
                        ? `border-radius: ${keyData.hover.borderRadius};`
                        : ""
                    }
                    ${
                      keyData.hover.border
                        ? `border: ${keyData.hover.border};`
                        : ""
                    }
                    ${
                      keyData.hover.padding
                        ? `padding: ${keyData.hover.padding};`
                        : ""
                    }
                    ${
                      keyData.hover.shadow
                        ? `box-shadow: ${keyData.hover.shadow};`
                        : ""
                    }
                    `
                    : ""
                }
            
              }
            `;
        }
      }

      if (val === "animateTextIcon") {
        style += `
        .btn__container {
          position: relative;
          transition: 0.3s ease-in-out;
        }

        .btn__icon {
          position: absolute;
          opacity: 0;
          top: 0;
          ${propValues.indexOf("left") > -1 ? "left: -20px;" : "right: -20px;"}
          transition: 0.3s ease-in-out;
        }

        .btn__text {
          transition: 0.3s ease-in-out;
        }

        &:hover {
          .btn__text {
          ${
            propValues.indexOf("left") > -1
              ? "padding-left: 20px;"
              : "padding-right: 20px;"
          }
          }

          .btn__icon {
            opacity: 1;
            ${propValues.indexOf("left") > -1 ? "left: 0px;" : "right: 0px;"}
          }
        }
        `;
      }

      if (val === "textIcon") {
        style += `
        .btn__container {
          position: relative;
        }

        .btn__icon {
          position: absolute;
          top: 0;
          ${propValues.indexOf("left") > -1 ? "left: 0px;" : "right: 0px;"}
          transition: 0.3s ease-in-out;
        }

        .btn__text {
          ${
            propValues.indexOf("left") > -1
              ? "padding-left: 20px;"
              : "padding-right: 20px;"
          }
          transition: 0.3s ease-in-out;
        }
        `;
      }
    }

    return style;
  }}

  ${general}
`;
