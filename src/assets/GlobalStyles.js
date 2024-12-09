import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
    --background: #0d0d0d;
    --secondbg: #221f1f96;
    --text: #fff;
    --secondtext: #76b900;
    --thirdtext: #9bd23d;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Poppins', sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }
    
    body {
        box-sizing: border-box;   
        margin: 0;
        padding: 0;
        /* background: #171717; */
        background: var(--background);
        /* background-color: #041206; */
        /* background-color: #F2F3F5; */
        font-family: 'Rubik', sans-serif;
        color: black;
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden;
        text-decoration: none;
    }

`;
