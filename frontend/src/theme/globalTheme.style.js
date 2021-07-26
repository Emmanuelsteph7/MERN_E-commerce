import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
        scroll-behavior: smooth;
    }

    body {
        font-family: ${(props) => props.theme.fontFamily};
    }

    a {
        text-decoration: none;
    }

    button {
        outline: none;
        border: none;
    }

    img {
        max-width: 100%;
    }
`;

export default GlobalStyles;
