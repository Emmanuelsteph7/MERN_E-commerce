import styled from "styled-components";
import { general } from "../../general/general.style";
import { generalFlex } from "../../general/generalFlex.style";

export const Span = styled.span.attrs((props) => ({
  className: props.className || "",
}))`
  ${general}
  ${generalFlex}
`;
