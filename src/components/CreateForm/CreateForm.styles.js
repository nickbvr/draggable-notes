import styled from 'styled-components';

export const CreateFormContainer = styled.div`
    display: flex;
    width: 380px;
    position: relative;

    input {
        margin-right: 10px;
        width: 100%;
    }
`;

export const ErrorMessage = styled.p`
    position: absolute;
    top: 42px;
    left: 0;
    font-size: 13px;
    margin: 5px 0 0 20px;
    color: red;
`;
