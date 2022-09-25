import styled, { css } from 'styled-components';
import { Popover } from '@mui/material';

export const ClearPopupContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 15px 0 0 15px;
    z-index: 2;
`;

export const PopUp = styled(Popover)`
    ${({ theme: { colors, shadows } }) => css`
        > div {
            box-shadow: ${shadows.transparentSmall};
            border-radius: 8px;

            > div {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 15px;
                background-color: ${colors.body85};

                p {
                    color: ${colors.primary};
                }

                button:first-child {
                    margin-right: 15px;
                }
            }
        }
    `}
`;
