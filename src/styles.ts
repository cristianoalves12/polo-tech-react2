import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box
    }

    body {
        background: #0C0C0C;
        color: #fff
    }

    body, input {
        font-family: 'Roboto', sans-serif;
    }
`;

export const AppLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    min-height: 100vh;
`;

export const globalColorsObject = {
    primaryColor: '#FFC93F '
}