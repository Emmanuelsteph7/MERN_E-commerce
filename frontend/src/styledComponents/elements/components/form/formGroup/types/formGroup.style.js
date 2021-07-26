import styled, { css } from "styled-components";
import { general } from "../../../../../common";

export const FormGroupDiv = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;

  ${(props) => {
    let style = "";
    let propValues = Object.keys(props);

    console.log(propValues);
    for (const val of propValues) {
      let groups = props.theme.input;
      let keys = Object.keys(groups);

      for (const key of keys) {
        let keyData = groups[key];
        let label = keyData.label;
        if (val === key) {
          console.log(key);
          style += `
          .formGroup__input {
            ${
              keyData
                ? `
                  ${keyData.color ? `color: ${keyData.color};` : ""}
                  ${keyData.bg ? `background-color: ${keyData.bg};` : ""}
                    ${keyData.border ? `border: ${keyData.border};` : ""}
                    ${keyData.padding ? `padding: ${keyData.padding};` : ""}
                    ${
                      keyData.borderRadius
                        ? `border-radius: ${keyData.borderRadius};`
                        : ""
                    }
              `
                : ""
            }
              &:focus {
                ${
                  keyData && keyData.focus
                    ? `
                      ${
                        keyData.focus.color
                          ? `color: ${keyData.focus.color};`
                          : ""
                      }
                      ${
                        keyData.focus.bg
                          ? `background-color: ${keyData.focus.bg};`
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
                  `
                    : ""
                }
              }
              &:valid {
                ${
                  keyData && keyData.focus
                    ? `
                        ${
                          keyData.focus.color
                            ? `color: ${keyData.focus.color};`
                            : ""
                        }
                        ${
                          keyData.focus.bg
                            ? `background-color: ${keyData.focus.bg};`
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
                    `
                    : ""
                }
              }
            }

              .formGroup__label {
                ${
                  keyData && label
                    ? `
                      ${label.color ? `color: ${label.color};` : ""}
                      ${label.bg ? `background-color: ${label.bg};` : ""}
                        ${label.border ? `border: ${label.border};` : ""}
                        ${label.padding ? `padding: ${label.padding};` : ""}
                        ${
                          label.borderRadius
                            ? `border-radius: ${label.borderRadius};`
                            : ""
                        }
                  `
                    : ""
                }
          }
          `;
        }
      }

      if (val === "animateText") {
        style += `
        position: relative;

        .formGroup__input {
            width: 100%;
            height: 100%;

            &:focus {
                + .formGroup__label {
                    width: 100%;

                    .formGroup__text {
                        font-size: 0.7rem;
              color: #444;
              top: -1rem;
        }
                }
            }

            &:valid {
                + .formGroup__label {
                    width: 100%;

                    .formGroup__text {
                        top: -1rem;
                        font-size: 0.7rem;
                    }
                }
            }
        }

        .formGroup__label {
            position: absolute;
            width: 0;
            height: 100%;
            top: 0;
            left: 0;
            border-bottom: 2px solid blue;
            pointer-events: none;
            transition: 0.3s ease-in-out;
        } 

        .formGroup__text {
            position: absolute;
            font-size: 1rem;
            top: calc(50% - 0.5rem);
            width: max-content;
            left: 25px;
            transition: 0.3s ease-in-out;
        }

        
        `;
        for (const key of keys) {
          let keyData = groups[key];
          let label = keyData.label;
          if (propValues.indexOf(key) > -1) {
            style += `
            .formGroup__input {
                &:focus {
                    + .formGroup__label {    
                        .formGroup__text {
                            ${
                              label && label.focus
                                ? `
                                ${
                                  label.focus.color
                                    ? `color: ${label.focus.color};`
                                    : ""
                                }
                                ${
                                  label.focus.top
                                    ? `top: ${label.focus.top};`
                                    : ""
                                }
                                ${
                                  label.focus.border
                                    ? `border: ${label.focus.border};`
                                    : ""
                                }
                                ${
                                  label.focus.borderRadius
                                    ? `border-radius: ${label.focus.borderRadius};`
                                    : ""
                                }
                                ${
                                  label.focus.padding
                                    ? `padding: ${label.focus.padding};`
                                    : ""
                                }
                                  ${
                                    label.focus.fontSize
                                      ? `font-size: ${label.focus.fontSize};`
                                      : ""
                                  }
                                  ${
                                    label.focus.bg
                                      ? `background-color: ${label.focus.bg};`
                                      : ""
                                  }
                            `
                                : ""
                            }
                        }
                    }
                }
                &:valid {
                    + .formGroup__label {    
                        .formGroup__text {
                            ${
                              label && label.focus
                                ? `
                                ${
                                  label.focus.color
                                    ? `color: ${label.focus.color};`
                                    : ""
                                }
                                ${
                                  label.focus.top
                                    ? `top: ${label.focus.top};`
                                    : ""
                                }
                                ${
                                  label.focus.border
                                    ? `border: ${label.focus.border};`
                                    : ""
                                }
                                ${
                                  label.focus.borderRadius
                                    ? `border-radius: ${label.focus.borderRadius};`
                                    : ""
                                }
                                ${
                                  label.focus.padding
                                    ? `padding: ${label.focus.padding};`
                                    : ""
                                }
                                  ${
                                    label.focus.fontSize
                                      ? `font-size: ${label.focus.fontSize};`
                                      : ""
                                  }
                                  ${
                                    label.focus.bg
                                      ? `background-color: ${label.focus.bg};`
                                      : ""
                                  }
                            `
                                : ""
                            }
                        }
                    }
                }
                
            }
    
            .formGroup__label {
                position: absolute;
                width: 0;
                height: 100%;
                top: 0;
                left: 0;
                border-bottom: 2px solid blue;
                pointer-events: none;
                transition: 0.3s ease-in-out;
            } 
    
            .formGroup__text {
                position: absolute;
                font-size: 1rem;
                top: calc(50% - 0.5rem);
                width: max-content;
                left: 25px;
                transition: 0.3s ease-in-out;
            }
    
            
            `;
          }
        }
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
