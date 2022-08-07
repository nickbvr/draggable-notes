import styled from 'styled-components';

export const SwitchWrapper = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    margin: 15px 15px 0 0;
    height: 34px;
    width: 34px;

    button {
        align-items: center;
        border-radius: 50%;
        display: flex;
        height: 100%;
        justify-content: center;
        width: 100%;
        background: none;
        border: none;
        color: inherit;
        font-family: inherit;
        padding: 0;
        transition: background-color 0.2s;
        cursor: pointer;

        &:hover {
            background-color: ${(props) => props.theme.bodyColor20};
        }
    }
`;
