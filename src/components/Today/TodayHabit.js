import styled from "styled-components";
import { IconContext } from "react-icons";
import { BsCheckSquareFill } from "react-icons/bs";
import { postHabitsCheck, postHabitsUncheck } from "../../services/trackit";

export default function TodayHabit({ id, name, done, currentSequence, highestSequence, renderHabits, setRenderHabits }) {
    function checkHabit() {
        if (!done) {
            console.log('Oi', id);
            postHabitsCheck(id)
                .catch((error) => {
                    console.log(error);
                })
                .then((answer) => {
                    setRenderHabits(!renderHabits);
                });
        } else {
            postHabitsUncheck(id)
                .catch((error) => {
                    console.log(error);
                })
                .then((answer) => {
                    setRenderHabits(!renderHabits);
                });
        }
    }

    return (
        <LiWrapper>
            <section>
                <h3>
                    {name}
                </h3>
                <p>
                    Sequência atual: <Span done={done}>{currentSequence} dias</Span>
                </p>
                <p>
                    Seu recorde: <Span>{highestSequence} dias</Span>
                </p>
            </section>
            <IconContext.Provider value={{ color: (done ? "#8FC549" : "#EBEBEB"), size: "69px" }}>
                <BsCheckSquareFill onClick={checkHabit} />
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