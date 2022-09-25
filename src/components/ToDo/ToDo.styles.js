import { Popover } from '@mui/material';
import styled, { css } from 'styled-components';

export const ToDoWrapper = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    left: 0;
`;

export const ToDoContainer = styled.div`
    ${({ theme: { shadows } }) => css`
        position: absolute;
        display: flex;
        align-items: center;
        border-radius: 8px;
        height: auto;
        max-width: 300px;
        z-index: 2;
        cursor: grab;
        box-shadow: ${shadows.small};
        transition: box-shadow 0.2s;

        svg {
            min-width: 20px;
            fill: rgba(0, 0, 0, 0.7);
            min-height: 20px;
            cursor: pointer;
            transition: fill 0.2s;

            &:hover {
                fill: #000;
            }
        }
    `}
`;

export const ToDoValue = styled.p`
    margin: 0 16px;
    padding: 15px 0;
    cursor: grab;
    width: max-content;
    word-break: break-all;
`;

export const EditInput = styled.div`
    margin-left: 16px;
    position: relative;

    input {
        border: none;
        background-color: inherit;
        font-size: inherit;
        padding: 0;
        margin: 0;
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: black;
        width: 100%;
        height: 1px;
    }
`;

export const SaveButton = styled.button`
    font-size: 16px;
    padding: 15px;
    border: none;
    color: #000000;
    background: transparent;
    cursor: pointer;
`;

export const PopUp = styled(Popover)`
    ${({ theme: { colors, shadows } }) => css`
        div {
            box-shadow: ${shadows.transparentSmall};
            border-radius: 8px;

            div {
                padding: 15px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                background-color: ${colors.body85};

                button:first-child {
                    margin-right: 15px;
                }
            }
        }
    `}
`;
