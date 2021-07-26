import styled, { css } from "styled-components";
import { general } from "../general/general.style";
import { generalFlex } from "../general/generalFlex.style";

export const Button = styled.button`
  ${general}
  ${generalFlex} 
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.white};
  border-radius: ${(props) => (props.br ? props.br : "5px")};
  font-size: ${(props) =>
    props.font ? props.font : props.theme.font.normal.fontSize};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  box-shadow: ${(props) => (props.shadow ? props.theme.shadow : "")};
  font-weight: 600;
  width: ${(props) =>
    props.fullWidth
      ? "100%"
      : props.width50
      ? "50%"
      : props.width
      ? props.width
      : "fit-content"};

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary};
  }

  ${({ center }) =>
    center &&
    css`
      margin: 0 auto;
    `}

  ${({ outline }) =>
    outline &&
    css`
      color: red;
      background-color: white;
      border: 2px solid red;

      &:hover {
        background-color: red;
        color: white;
      }
    `}
`;
