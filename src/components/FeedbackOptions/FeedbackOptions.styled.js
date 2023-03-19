import styled from "styled-components";

export const ButtonList = styled.div`
display: flex;
gap: 10px;
`;

export const Button = styled.button`
    margin-top: 15px;
    padding: 8px;
    text-transform: capitalize;
    border: none;
    border-radius: 5px;
    background-color: #309bff;


    :hover {
        background-color: #5eb1ff;
        box-shadow: 0px 6px 9px 0px #adadad;
    }
`;