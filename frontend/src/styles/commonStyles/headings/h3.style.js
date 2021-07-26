import styled from "styled-components";
import { general } from "../../general/general.style";
import { generalFlex } from "../../general/generalFlex.style";

export const H3 = styled.h3.attrs((props) => ({
  className: props.className || "",
}))`
  ${general}
  ${generalFlex}

  /* font properties */
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : props.theme.font.h3.fontSize};
  font-weight: ${(props) =>
    props.fontWeight ? props.fontWeight : props.theme.font.h3.fontWeight};
`;
