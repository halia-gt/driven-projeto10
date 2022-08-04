import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { weekday } from "../common/weekData";
import styled from "styled-components";
import TodayHabit from "./TodayHabit";
import { getHabitsToday } from "../../services/trackit";
import Loading from "../common/Loading";
import UserContext from "../../context/UserContext";

export default function Today() {
    const [habits, setHabits] = useState(null);
    const [renderHabits, setRenderHabits] = useState(false);
    const { setPercentage } = useContext(UserContext);
    let text, doneHabits, started;

    useEffect(() => {
        getHabitsToday()
            .catch((error) => {
                console.log(error.message);
            })
            .then((answer) => {
                setHabits(answer.data);
            });
    }, [renderHabits]);

    if (habits) {
        doneHabits = habits.filter(habit => habit.done);
        const percentage = Math.round((doneHabits.length / habits.length)*100);
        setPercentage(percentage);

        if (doneHabits.length === 0) {
            started = false;
            text = 'Nenhum hábito concluído ainda';
        } else {
            started = true;
            text = `${percentage}% dos hábitos concluídos`;
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
                        <TodayHabit key={habit.id} {...habit} renderHabits={renderHabits} setRenderHabits={setRenderHabits} />
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