import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    } 
`;
