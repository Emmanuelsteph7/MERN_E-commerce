import styled from "styled-components";
import { general } from "../../general/general.style";
import { generalFlex } from "../../general/generalFlex.style";

export const P = styled.p.attrs((props) => ({
  className: props.className || "",
}))`
  ${general}
  ${generalFlex}
`;
