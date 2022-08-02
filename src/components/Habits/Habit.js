import styled from "styled-components";
import { IconContext } from "react-icons";
import { ImBin } from "react-icons/im";

export default function Habit() {
    return (
        <HabitWrapper>
            <h3>Ler 1 capítulo de livro</h3>
            <IconContext.Provider value={{ color: "#666666", className: "icon" }}>
                <ImBin />
            </IconContext.Provider>
            <section>
                <H4 selected={false}>D</H4>
                <H4 selected={true}>S</H4>
                <H4 selected={true}>T</H4>
                <H4 selected={false}>Q</H4>
                <H4 selected={false}>Q</H4>
                <H4 selected={false}>S</H4>
                <H4 selected={false}>S</H4>
            </section>
        </HabitWrapper>
    );
}

const HabitWrapper = styled.li`
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    padding: 15px;
    margin-bottom: 10px;

    h3 {
        color: #666666;
    }

    .icon {
        position: absolute;
        top: 11px;
        right: 10px;
    }

    section {
        display: flex;
        margin-top: 8px;
    }
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