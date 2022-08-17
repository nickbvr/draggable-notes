import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        outline: unset;
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-tap-highlight-color: transparent;
        font-family: 'Nunito', sans-serif;
    }

    body {
        background-color: ${(props) => props.theme.bodyColor};
        transition: background-color 0.2s;
        margin: 0 auto;
        &.preloader {
            transition: none
        }
    }
`;

export const Container = styled.main`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    max-width: 100%;
    overflow: auto;
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
    z-index: 1;

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
    z-index: 1;

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
