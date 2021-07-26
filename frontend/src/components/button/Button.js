import React from "react";
import { StyledBtn } from "../../styles/components/button.style";

const Button = ({ children, outline, fullWidth, width50, center }) => {
  return (
    <>
      <StyledBtn
        outline={outline}
        fullWidth={fullWidth}
        width50={width50}
        center={center}
      >
        {children}
      </StyledBtn>
    </>
  );
};

export default Button;
