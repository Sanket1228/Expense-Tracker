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

export const ErrorTag = styled.div`
    margin: 10px 10px;
    padding: 20px 20px;
    color: #9F6000;
    background-color: #FEEFB3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Closebutton = styled.button`
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
`;