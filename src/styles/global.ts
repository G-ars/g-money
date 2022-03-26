import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363F5F;
    --text-body: #969cb3;

    --shape: #FFFF;
}


*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

html{
    @media (max-width: 1000px){
        font-size:93.75%;
    }

    @media (max-width: 720px){
        font-size:87.5%;
    }
}


body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased; //fontes detalhadas(nítidas)
}

button{ 
    cursor: pointer;
}

[disable]{
    opacity: 0.6;
    cursor: not-allowed;
}

`