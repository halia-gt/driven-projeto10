import styled from "styled-components";
import { IconContext } from "react-icons";
import { ImBin } from "react-icons/im";
import HabitWeek from "./HabitWeek";

export default function Habit() {
    return (
        <Wrapper>
            <h3>Ler 1 capítulo de livro</h3>
            <IconContext.Provider value={{ color: "#666666", className: "icon" }}>
                <ImBin />
            </IconContext.Provider>
            <HabitWeek />
        </Wrapper>
    );
}

const Wrapper = styled.li`
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
`;