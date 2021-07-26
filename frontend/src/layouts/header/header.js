import React from "react";
import { Div, FlexDiv, Header } from "../../styles";
import SearchForm from "./components/searchForm";

const MainHeader = () => {
  return (
    <Header bgColor="secondary" pd="20px 0">
      <FlexDiv jcBetween aiCenter width="90%" mg="0 auto" maxW="1200px">
        <Div>Logos</Div>
        <SearchForm />
        <Div>3</Div>
      </FlexDiv>
    </Header>
  );
};

export default MainHeader;
