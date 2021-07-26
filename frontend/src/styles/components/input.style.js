import styled, { css } from "styled-components";
import { general } from "../general/general.style";
import { generalFlex } from "../general/generalFlex.style";

export const Input = styled.input`
  ${general}
  ${generalFlex}
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.text};
  border-radius: ${(props) => (props.br ? props.br : "5px")};
  font-size: ${(props) =>
    props.font ? props.font : props.theme.font.normal.fontSize};
  transition: 0.2s ease-in-out;
  box-shadow: ${(props) => (props.shadow ? props.theme.shadow : "")};
  width: ${(props) =>
    props.fullWidth
      ? "100%"
      : props.width50
      ? "50%"
      : props.width
      ? props.width
      : "fit-content"};

  // &:focus {
  //   background-color: ${({ theme }) => theme.color.secondary};
  // }
`;
