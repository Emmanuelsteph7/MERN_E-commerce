import styled from "styled-components";
import { general } from "../../common";

export const Label = styled.label`
  ${(props) => {
    let style = "";
    let propValues = Object.keys(props);

    for (const val of propValues) {
      let groups = props.theme.input;
      let keys = Object.keys(groups);

      for (const key of keys) {
        if (val === key) {
          let keyData = groups[key];
          style += `
              ${
                keyData && keyData.label
                  ? `
                  ${
                    keyData.label.bg
                      ? `background-color: ${keyData.label.bg};`
                      : ""
                  }
                  ${
                    keyData.label.bgImg
                      ? `background-image: ${keyData.label.bgImg};`
                      : ""
                  }
                  ${keyData.label.color ? `color: ${keyData.label.color};` : ""}
                  ${
                    keyData.label.borderRadius
                      ? `border-radius: ${keyData.label.borderRadius};`
                      : ""
                  }
                  ${
                    keyData.label.border
                      ? `border: ${keyData.label.border};`
                      : ""
                  }
                  ${
                    keyData.label.borderBottom
                      ? `border-bottom: ${keyData.label.borderBottom};`
                      : ""
                  }
                  ${
                    keyData.label.borderTop
                      ? `border-top: ${keyData.label.borderTop};`
                      : ""
                  }
                  ${
                    keyData.label.fontSize
                      ? `fontSize: ${keyData.label.fontSize};`
                      : ""
                  }
                  ${
                    keyData.label.padding
                      ? `padding: ${keyData.label.padding};`
                      : ""
                  }
                  ${
                    keyData.label.shadow
                      ? `box-shadow: ${keyData.label.shadow};`
                      : ""
                  }
                  `
                  : ""
              }

              &:focus {
                ${
                  keyData.label.focus
                    ? `
                    ${
                      keyData.label.focus.bg
                        ? `background-color: ${keyData.label.focus.bg};`
                        : ""
                    }
                  ${
                    keyData.label.focus.fontSize
                      ? `fontSize: ${keyData.label.focus.fontSize};`
                      : ""
                  }
                  ${
                    keyData.label.focus.bgImg
                      ? `background-image: ${keyData.label.focus.bgImg};`
                      : ""
                  }
                    ${
                      keyData.label.focus.color
                        ? `color: ${keyData.label.focus.color};`
                        : ""
                    }
                    ${
                      keyData.label.focus.borderRadius
                        ? `border-radius: ${keyData.label.focus.borderRadius};`
                        : ""
                    }
                    ${
                      keyData.label.focus.border
                        ? `border: ${keyData.label.focus.border};`
                        : ""
                    }
                    ${
                      keyData.label.focus.padding
                        ? `padding: ${keyData.label.focus.padding};`
                        : ""
                    }
                    ${
                      keyData.label.focus.shadow
                        ? `box-shadow: ${keyData.label.focus.shadow};`
                        : ""
                    }
                    `
                    : ""
                }
            
              }
            `;
        }
      }
    }

    return style;
  }}

  ${general}
`;
