import { useEffect, useState } from "react";
import styled from "styled-components";
import { Main, Title, Span } from "../../assets/styles/Body";
import HabitForm from "./HabitForm";
import Button from "../../assets/styles/Button";
import Habit from "./Habit";
import { getHabits } from "../../services/trackit";
import { ThreeDots } from "react-loader-spinner";

export default function Habits() {
    const [newHabit, setNewHabit] = useState(false);
    const [habits, setHabits] = useState(null);

    useEffect(() => {
        getHabits()
            .catch((error) => {
                console.log(error);
            })
            .then((answer) => {
                console.log(answer.data);
                setHabits(answer.data);
            })
    }, [])

    return (
        <Main>
            <TitleWrapper>
                <Title>
                    Meus hábitos
                </Title>
                <Button height="35px" width="40px" fontSize="27px" onClick={ () => setNewHabit(true) }>
                    +
                </Button>
            </TitleWrapper>
            {newHabit ? <HabitForm setNewHabit={setNewHabit} /> : <></>}

            {habits ? (
                    habits.length === 0 ? (
                        <Span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Span>
                    ) : (
                        <ul>
                            {habits.map(habit => (
                                <Habit key={habit.id} {...habit} />
                            ))}
                        </ul>
                    )
                ) : (
                    <LoadingWrapper>
                        <ThreeDots
                            radius="9"
                            color="#52B6FF"
                            ariaLabel="three-dots-loading"
                        />
                    </LoadingWrapper>
                )}
        </Main>

    );
}

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
`;