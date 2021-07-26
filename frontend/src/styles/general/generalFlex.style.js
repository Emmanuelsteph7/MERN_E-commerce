export const generalFlex = (props) => {
  let style = `
    flex-direction: ${props.column ? "column" : "row"};
    flex-wrap: ${props.wrap ? "wrap" : "nowrap"};
    justify-content: ${
      props.jcCenter
        ? "center"
        : props.jcBetween
        ? "space-between"
        : props.jcEvenly
        ? "space-evenly"
        : props.jcAround
        ? "space-around"
        : props.jcEnd
        ? "flex-end"
        : "flex-start"
    };
    align-items: ${
      props.aiCenter
        ? "center"
        : props.aiBetween
        ? "space-between"
        : props.aiEvenly
        ? "space-evenly"
        : props.aiAround
        ? "space-around"
        : props.aiEnd
        ? "flex-end"
        : props.aiBaseline
        ? "baseline"
        : props.aiStretch
        ? "stretch"
        : "flex-start"
    };
    align-content: ${
      props.acCenter
        ? "center"
        : props.acBetween
        ? "space-between"
        : props.acEvenly
        ? "space-evenly"
        : props.acAround
        ? "space-around"
        : props.acEnd
        ? "flex-end"
        : props.acStart
        ? "flex-start"
        : "stretch"
    };
  
    /** a flex container can also be a flex item **/
    order: ${props.order && props.order};
    flex-grow: ${props.grow && props.grow};
    flex-shrink: ${props.shrink && props.shrink};
    flex: ${props.flex && props.flex};
    align-self: ${
      props.asCenter
        ? "center"
        : props.asStretch
        ? "stretch"
        : props.asBaseline
        ? "baseline"
        : props.asEnd
        ? "flex-end"
        : props.asStart
        ? "flex-start"
        : "auto"
    };
    `;

  return style;
};
