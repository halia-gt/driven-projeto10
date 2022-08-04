import styled from "styled-components";
import { IconContext } from "react-icons";
import { BsCheckSquareFill } from "react-icons/bs";

export default function TodayHabit({ habit, checkHabit }) {

    return (
        <LiWrapper>
            <section>
                <h3>
                    {habit.name}
                </h3>
                <p>
                    Sequência atual: <Span done={habit.done}>{habit.currentSequence} dias</Span>
                </p>
                <p>
                    Seu recorde: <Span>{habit.highestSequence} dias</Span>
                </p>
            </section>
            <IconContext.Provider value={{ color: (habit.done ? "#8FC549" : "#EBEBEB"), size: "69px" }}>
                <BsCheckSquareFill onClick={() => checkHabit(habit.id)} />
            </IconContext.Provider>
        </LiWrapper>
    );
}

const LiWrapper = styled.li`
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;

    section {
        padding: 0;
    }

    h3 {
        color: #666666;
        font-size: 20px;
        margin-bottom: 8px;
    }

    p {
        color: #666666;
        font-size: 13px;
        margin-bottom: 3px;
    }
`;

const Span = styled.span`
    color: ${props => props.done ? '#8FC549' : '#666666'};
`;