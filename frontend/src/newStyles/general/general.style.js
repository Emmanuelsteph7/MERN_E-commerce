export const general = (props) => {
  let style = "";

  style += props.row
    ? `
        display: flex;
        flex-direction: row;
    `
    : "";

  style += props.rowTabJB
    ? `
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `
    : "";

  return style;
};
