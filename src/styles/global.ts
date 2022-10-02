import styled, { createGlobalStyle, css } from 'styled-components';
import { Theme } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
    ${({ theme: { colors } }) => css`
        * {
            box-sizing: border-box;
            outline: unset;
            text-decoration: none;
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
            -webkit-tap-highlight-color: transparent;
            font-family: 'Nunito', sans-serif;
        }

        body {
            background-color: ${colors.body85};
            transition: background-color 0.2s;
            margin: 0 auto;
            &.initialTransition {
                transition: none;
            }
        }
    `}
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
    ${({ theme: { colors, shadows } }: { theme: Theme }) => css`
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 8px;
        border: none;
        color: ${colors.primary};
        background-color: ${colors.body85};
        box-shadow: ${shadows.big};
        transition: box-shadow 0.2s, background-color 0.2s, color 0.2s;
        cursor: pointer;
        z-index: 1;

        &:hover {
            box-shadow: ${shadows.reverseBig};
        }

        &:active {
            background: ${colors.body84};
            box-shadow: ${shadows.transparentInsetSmall};
        }

        &:disabled {
            color: grey;
            background: ${colors.body85};
            box-shadow: ${shadows.transparentInsetSmall};
            cursor: not-allowed;

            &:hover {
                box-shadow: ${shadows.transparentInsetSmall};
            }
        }
    `}
`;

export const Input = styled.input`
    ${({ theme: { colors, shadows } }: { theme: Theme }) => css`
        padding: 10px 20px;
        font-size: 16px;
        border-radius: 8px;
        border: none;
        color: ${colors.primary};
        background-color: ${colors.body84};
        box-shadow: ${shadows.swappedTransparentInsetSmall};
        transition: box-shadow 0.2s, color 0.2s, background-color 0.2s;
        z-index: 1;

        &::placeholder {
            color: ${colors.primary};
            transition: color 0.2s;
        }

        &:focus {
            background: ${colors.body85};
            box-shadow: ${shadows.swappedBig};
        }
    `}
`;
