import React from "react";
import { FlexDiv, Input, Button } from "../../../styles";
import { FiSearch } from "react-icons/fi";

const SearchForm = () => {
  return (
    <FlexDiv width="30%" height="37px">
      <Input br="0" pd="0 10px" height="100%" width="80%" />
      <Button br="0" display="flex" jcCenter aiCenter height="100%" width="20%">
        <FiSearch />
      </Button>
    </FlexDiv>
  );
};

export default SearchForm;
