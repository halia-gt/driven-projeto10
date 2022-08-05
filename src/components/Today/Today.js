import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { weekday } from "../common/weekData";
import styled from "styled-components";
import TodayHabit from "./TodayHabit";
import { getHabitsToday } from "../../services/trackit";
import Loading from "../common/Loading";
import UserContext from "../../context/UserContext";
import { postHabitsCheck, postHabitsUncheck } from "../../services/trackit";

export default function Today() {
    const [habits, setHabits] = useState(null);
    const { setPercentage } = useContext(UserContext);
    const [ text, setText ] = useState('');
    const [ started, setStarted ] = useState(false);
    const [ render, setRender ] = useState(false);

    useEffect(() => {
        getHabitsToday()
            .catch((error) => {
                console.log(error.message);
            })
            .then((answer) => {
                setHabits(answer.data);
                const doneHabits = answer.data.filter(habit => habit.done);
                const percentageDone = Math.round((doneHabits.length / answer.data.length)*100);
                if (doneHabits.length === 0) {
                    setStarted(false);
                    setText('Nenhum hábito concluído ainda');
                } else {
                    setStarted(true);
                    setText(`${percentageDone}% dos hábitos concluídos`);
                }
                setPercentage(percentageDone);
            });
    }, [setPercentage, render]);

    function checkHabit(habitId) {
        const habit = habits.filter(habit => habitId === habit.id)[0];
        if (!habit.done) {
            postHabitsCheck(habitId)
                .catch((error) => {
                    console.log(error);
                })
                .then(() => {
                    setRender(!render);
                });
        } else {
            postHabitsUncheck(habitId)
                .catch((error) => {
                    console.log(error);
                })
                .then(() => {
                    setRender(!render);
                });
        }
    }

    return (
        <Wrapper>
            <div>
                <h2>
                    {weekday}, {dayjs().format('DD/MM')}
                </h2>
                <H4 started={started}>
                    {text}
                </H4>
            </div>

            {habits ? (
                <ul>
                    {habits.map(habit => (
                        <TodayHabit key={habit.id} habit={habit} checkHabit={checkHabit} />
                    ))}
                </ul>
            ) : (
                <Loading />
            )}

        </Wrapper>
    );
}

const Wrapper = styled.section`
    width: 90vw;
    margin: 72px auto;

    div {
        padding: 20px 0;
    }

    h2 {
        color: #126BA5;
        font-size: 23px;
        margin-bottom: 3px;
    }
`;

const H4 = styled.h4`
    color: ${props => props.started ? '#8FC549' : '#BABABA'};
    font-size: 18px;
`;