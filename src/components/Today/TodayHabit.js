import styled from "styled-components";
import { IconContext } from "react-icons";
import { BsCheckSquareFill } from "react-icons/bs";
import { Li } from "../../assets/styles/Body";


export default function TodayHabit({ habit, checkHabit }) {
    const equalSequence = (habit.currentSequence === habit.highestSequence && habit.highestSequence !== 0);

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
                    Seu recorde: <Span done={equalSequence}>{habit.highestSequence} dias</Span>
                </p>
            </section>
            <IconContext.Provider value={{ color: (habit.done ? "#8FC549" : "#EBEBEB"), size: "69px" }}>
                <BsCheckSquareFill onClick={() => checkHabit(habit.id)} />
            </IconContext.Provider>
        </LiWrapper>
    );
}

const LiWrapper = styled(Li)`
    section {
        padding: 0;
    }

    h3 {
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