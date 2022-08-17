import styled from 'styled-components';
import { Popover } from '@mui/material';

export const ClearPopupContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 15px 0 0 15px;
    z-index: 2;
`;

export const PopUp = styled(Popover)`
    > div {
        box-shadow: 0 0 transparent, 0 0 transparent,
            4px 4px 6px ${(props) => props.theme.bodyColor10},
            -4px -4px 6px ${(props) => props.theme.bodyColor20};
        border-radius: 8px;
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 15px;
            background-color: ${(props) => props.theme.bodyColor};
            p {
                color: ${(props) => props.theme.primaryColor};
            }

            button:first-child {
                margin-right: 15px;
            }
        }
    }
`;
