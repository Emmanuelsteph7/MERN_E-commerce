export const general = (props) => {
  let style = `
    text-align: ${props.align ? props.align : "left"};
    letter-spacing: ${props.letter ? props.letter : "normal"};
    word-spacing: ${props.word ? props.word : "normal"};
    text-decoration: ${props.textDec ? props.textDec : "none"};
    text-transform: ${props.textTrans ? props.textTrans : "none"};
    text-shadow: ${props.textShadow ? props.textShadow : "none"};
 
    display: ${props.display && props.display};
     

  background: ${props.bg && props.bg};
  background-color: ${
    props.bgColor === "main"
      ? props.theme.color.main
      : props.bgColor === "secondary"
      ? props.theme.color.secondary
      : props.bgColor === "white"
      ? props.theme.color.white
      : "none"
  };
  color: ${
    props.bgColor === "main"
      ? props.theme.color.main
      : props.bgColor === "secondary"
      ? props.theme.color.secondary
      : props.bgColor === "white"
      ? props.theme.color.white
      : "black"
  };
  background-image: ${props.bgImg && props.bgImg};

    /* font properties */
  font-family: ${props.fontFam && props.fontFam};
  font-size: ${props.fontSize && props.fontSize};
  font-style: ${props.fontStyle && props.fontStyle};
  font-weight: ${props.fontWeight && props.fontWeight};

  /* Height, Width, margin and padding properties */
  width: ${props.width && props.width};
  min-width: ${props.minW && props.minW};
  max-width: ${props.maxW && props.maxW};
  height: ${props.height && props.height};
  min-height: ${props.minH && props.minH};
  max-height: ${props.maxH && props.maxH};
  padding: ${props.pd && props.pd};
  padding-left: ${props.pdl && props.pdl};
  padding-right: ${props.pdr && props.pdr};
  padding-bottom: ${props.pdb && props.pdb};
  padding-top: ${props.pdt && props.pdt};
  margin: ${props.mg && props.mg};
  margin-left: ${props.mgl && props.mgl};
  margin-right: ${props.mgr && props.mgr};
  margin-bottom: ${props.mgb && props.mgb};
  margin-top: ${props.mgt && props.mgt};

  /* position properties */
  position: ${
    props.fixed
      ? "fixed"
      : props.absolute
      ? "absolute"
      : props.relative
      ? "relative"
      : props.sticky
      ? "relative"
      : "static"
  };
  top: ${props.top && props.top};
  left: ${props.left && props.left};
  bottom: ${props.bottom && props.bottom};
  right: ${props.right && props.right};
    `;

  return style;
};
