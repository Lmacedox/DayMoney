import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #F2F0F5;
        --red: #E52E4D;
        --blue: #5429CC;

        --blue-light: #6833FF;

        --text-title: #353F4F;
        --text-body: #969CB3;

        --shape: #FFFFFF;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* FONTE */
    html{
        /* TELA MENOR QUE 1080px */
        @media (max-width: 1080px){
            font-size: 93.75%; //ISSO É 15PX
        }

        /* TELA MENOR QUE 720px */
        @media (max-width: 720px){
            font-size: 87.5%; //ISSO É 14PX
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, text-area, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    /* TUDO QUE ESTIVER DESABILITADO */
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`