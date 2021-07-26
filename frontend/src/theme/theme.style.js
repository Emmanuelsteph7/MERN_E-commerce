let main = "blue";

export const Theme = {
  color: {
    Main: "red",
    Secondary: "blue",
    White: "white",
    Text: "black",
  },
  btn: {
    main: {
      bg: "red",
      color: "white",
      padding: "1rem 2.5rem",
      borderRadius: "0px",
      hover: {
        bg: "tomato",
        color: "white",
      },
      shadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    },
    secondary: {
      border: "3px solid green",
      bg: "rgb(200, 200, 200)",
      color: "green",
      hover: {
        bg: "#000000",
        color: "white",
      },
    },
  },
  input: {
    main: {
      color: "white",
      bg: "#222",
      border: "none",
      padding: "1rem 1rem 1rem 25px",
      focus: {
        bg: "#111",
        color: "white",
        shadow: "0 0 10px rgba(0,0,0,0.5)",
      },
      label: {
        border: `2px solid ${main}`,
        color: "yellow",
        focus: {
          color: "red",
          padding: "0.2rem",
          bg: "#111",
          borderRadius: "0.5rem",
          border: `1px solid ${main}`,
          top: "-0.8rem",
          fontSize: "0.6rem",
        },
      },
    },
    normal: {
      color: "black",
      bg: "white",
      border: "1px solid black",
      focus: {
        bg: "#111",
        border: "1px solid green",
        color: "black",
        padding: "0.6rem 0.6rem 0.6rem 25px",
        borderRadius: "0.5rem",
        bg: "#ddd",
        shadow: "0 0 10px rgba(0,0,0,0.5)",
      },
      label: {
        color: "black",
        focus: {
          color: "#333",
          top: "-1rem",
          fontSize: "0.6rem",
        },
      },
    },
    myOwn: {
      padding: "1rem 2rem",
      color: "white",
      bg: "#222",
      border: "2px solid #222",
      focus: {
        border: "2px solid red",
      },
    },
  },
  fontFamily: "Arial, sans-serif",
  shadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  font: {
    h1: {
      fontSize: "3.3rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "1.6rem",
      fontWeight: "600",
    },
    h6: {
      fontSize: "1.3rem",
      fontWeight: "600",
    },
    normal: {
      fontSize: "1rem",
      fontWeight: "normal",
    },
  },
  screen: {
    xs: "576px",
    sm: "768px",
    md: "992px",
    tab: "1200px",
  },
};
