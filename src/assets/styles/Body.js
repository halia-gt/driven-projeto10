import styled from "styled-components";

export const Main = styled.main`
    width: 90vw;
    margin: 72px auto;
`;

export const Title = styled.h2`
    color: #126BA5;
    font-size: 23px;
    padding: 20px 0;
`;

export const Span = styled.span`
    width: 100%;
    font-size: 18px;
    color: #666666;
`;

export const Ul = styled.ul`
    display: flex;
    margin-top: 8px;
`;

export const H4 = styled.h4`
    width: 30px;
    height: 30px;
    background-color: ${props => props.selected ? '#CFCFCF' : '#FFFFFF'};
    color: ${props => props.selected ? '#FFFFFF' : '#CFCFCF'};
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    margin-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
