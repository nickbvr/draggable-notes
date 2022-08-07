import styled from 'styled-components';

export const ClearPopupContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 15px 0 0 15px;

    > div {
        position: absolute;
        background: ${(props) => props.theme.bodyColor};
        box-shadow: 0 0 transparent, 0 0 transparent,
            4px 4px 6px ${(props) => props.theme.bodyColor10},
            -4px -4px 6px ${(props) => props.theme.bodyColor20};
        transition: box-shadow 0.2s;
        border-radius: 8px;
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 15px;
        margin-top: 15px;
        div {
            display: flex;
        }
        p {
            color: ${(props) => props.theme.primaryColor};
            transition: color 0.2s;
        }

        button {
            &:first-child {
                margin-right: 15px;
            }
            /* width: 75px; */
            /* height: 60px; */
        }
    }
`;
