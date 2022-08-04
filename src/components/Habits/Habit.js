import styled from "styled-components";
import { IconContext } from "react-icons";
import { ImBin } from "react-icons/im";
import HabitDay from "./HabitDay";
import { Ul } from "../../assets/styles/Body";
import { weekData } from "../common/weekData";

export default function Habit({ id, name, days, confirmDelete }) {
    const week = weekData;
    
    const daysMapped = week.map(day => {
        if (days.includes(day.id)) {
            return {
                ...day,
                selected: true,
            }
        }
        return day;
    });

    return (
        <Wrapper>
            <h3>{name}</h3>
            <IconContext.Provider value={{ color: "#666666", className: "icon" }}>
                <ImBin onClick={() => confirmDelete(id)} />
            </IconContext.Provider>
            <Ul>
                {daysMapped.map(day => (
                    <HabitDay key={day.id} disabled={true} day={day} />
                ))}
            </Ul>

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