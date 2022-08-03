import styled from "styled-components";

export default function HabitWeek() {
    return(
        <Wrapper>
            <H4 selected={false}>D</H4>
            <H4 selected={true}>S</H4>
            <H4 selected={true}>T</H4>
            <H4 selected={false}>Q</H4>
            <H4 selected={false}>Q</H4>
            <H4 selected={false}>S</H4>
            <H4 selected={false}>S</H4>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    margin-top: 8px;
`;

const H4 = styled.h4`
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

