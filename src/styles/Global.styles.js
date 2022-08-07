import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        outline: unset;
        text-decoration: none;
        font-family: 'Nunito', sans-serif;
    }

    body {
        background-color: ${(props) => props.theme.bodyColor};
        transition: background-color 0.2s;
        margin: 0 auto;
    }
`;

export const Container = styled.main`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    padding: 0 10px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.bodyColor};
    box-shadow: 6px 6px 9px ${(props) => props.theme.bodyColor10},
        -6px -6px 9px ${(props) => props.theme.bodyColor20};
    transition: box-shadow 0.2s, background-color 0.2s, color 0.2s;
    cursor: pointer;

    &:hover {
        box-shadow: -6px -6px 9px ${(props) => props.theme.bodyColor10},
            6px 6px 9px ${(props) => props.theme.bodyColor20};
    }

    &:active {
        background: ${(props) => props.theme.bodyColor17};
        box-shadow: 0 0 transparent, 0 0 transparent,
            inset 4px 4px 6px ${(props) => props.theme.bodyColor10},
            inset -4px -4px 6px ${(props) => props.theme.bodyColor20};
    }

    &:disabled {
        color: grey;
        background: ${(props) => props.theme.bodyColor};
        box-shadow: 0 0 transparent, 0 0 transparent,
            inset 4px 4px 6px ${(props) => props.theme.bodyColor10},
            inset -4px -4px 6px ${(props) => props.theme.bodyColor20};
        cursor: not-allowed;

        &:hover {
            box-shadow: 0 0 transparent, 0 0 transparent,
                inset 4px 4px 6px ${(props) => props.theme.bodyColor10},
                inset -4px -4px 6px ${(props) => props.theme.bodyColor20};
        }
    }
`;

export const Input = styled.input`
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    color: ${(props) => props.theme.primaryColor};
    background-color: ${(props) => props.theme.bodyColor17};
    box-shadow: 0 0 transparent, 0 0 transparent,
        inset 4px 4px 6px ${(props) => props.theme.bodyColor20},
        inset -4px -4px 6px ${(props) => props.theme.bodyColor10};
    transition: box-shadow 0.2s, color 0.2s, background-color 0.2s;

    &::placeholder {
        color: ${(props) => props.theme.primaryColor};
        transition: color 0.2s;
    }

    &:focus {
        background: ${(props) => props.theme.bodyColor};
        box-shadow: 6px 6px 9px ${(props) => props.theme.bodyColor20},
            -6px -6px 9px ${(props) => props.theme.bodyColor10};
    }
`;

export default GlobalStyle;
