import styled, { css } from "styled-components";
import { general } from "../../../../common";

export const InputMain = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;

  ${(props) => {
    let style = "";
    let propValues = Object.keys(props);

    for (const val of propValues) {
      let groups = props.theme.input;
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

              &:focus {
                ${
                  keyData.focus
                    ? `
                    ${
                      keyData.focus.bg
                        ? `background-color: ${keyData.focus.bg};`
                        : ""
                    }
                    ${
                      keyData.focus.bgImg
                        ? `background-image: ${keyData.focus.bgImg};`
                        : ""
                    }
                    ${
                      keyData.focus.color
                        ? `color: ${keyData.focus.color};`
                        : ""
                    }
                    ${
                      keyData.focus.borderRadius
                        ? `border-radius: ${keyData.focus.borderRadius};`
                        : ""
                    }
                    ${
                      keyData.focus.border
                        ? `border: ${keyData.focus.border};`
                        : ""
                    }
                    ${
                      keyData.focus.padding
                        ? `padding: ${keyData.focus.padding};`
                        : ""
                    }
                    ${
                      keyData.focus.shadow
                        ? `box-shadow: ${keyData.focus.shadow};`
                        : ""
                    }
                    `
                    : ""
                }
            
              }
            `;
        }
      }

      if (val === "animateWidth") {
        style += `
        &:focus {
            width: 100%;
        }
        `;
      }
    }

    return style;
  }}

  ${general}
`;
