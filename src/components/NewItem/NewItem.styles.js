import styled from 'styled-components';

export const NewItemWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const NewItemContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    border-radius: 8px;
    height: auto;
    padding: 15px 0;
    padding-right: 16px;
    max-width: fit-content;
    box-shadow: 4px 4px 6px ${(props) => props.theme.bodyColor10},
        -4px -4px 6px ${(props) => props.theme.bodyColor20};
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
`;

export const NewItemValue = styled.p`
    margin: 0 16px;
    white-space: nowrap;
`;

export const EditInput = styled.div`
    margin: 0 16px;
    position: relative;

    input {
        border: none;
        background-color: inherit;
        font-size: inherit;
        padding: 0;
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
