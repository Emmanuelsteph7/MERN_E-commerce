import styled from "styled-components";
import { Div } from "../commonStyles";

export const GridContainer = styled(Div)`
  display: grid;
  grid-template-columns: ${({ gtCols }) => gtCols && gtCols};
  grid-template-rows: ${({ gtRows }) => gtRows && gtRows};
  grid-gap: ${({ gap }) => gap && gap};
`;
