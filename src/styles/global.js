import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700&display=swap');
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 45.65%;
        font-family: 'Nunito Sans', sans-serif;
    }

    body {
        max-width: 1110px;
        margin: auto;
        background-color: #2C1138;
        color: #fff;
    }

    img {
        width: 100%;
        height: 100%;
    }

    button {
        cursor: pointer;
    } 
`;
