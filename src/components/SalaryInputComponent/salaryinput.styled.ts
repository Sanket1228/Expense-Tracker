import styled from "styled-components";

export const SalaryInputBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 100px
`;

export const Input = styled.input`
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    background: papayawhip;
    border: none;
    width: 50vw;
    border-radius: 3px;
    ::placeholder {
    color: palevioletred;
    }
`;

export const ShowSalaryTag = styled.h3`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;

export const ContainerAddExpense = styled.div`
    margin: 10px 100px
`;