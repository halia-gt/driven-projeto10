import { useEffect, useState } from "react";
import styled from "styled-components";
import { Main, Title, Span } from "../../assets/styles/Body";
import HabitForm from "./HabitForm";
import Button from "../../assets/styles/Button";
import Habit from "./Habit";
import { deleteHabit, getHabits } from "../../services/trackit";
import { ThreeDots } from "react-loader-spinner";

export default function Habits() {
    const [newHabit, setNewHabit] = useState(false);
    const [habits, setHabits] = useState(null);
    const [renderHabits, setRenderHabits] = useState(false);

    useEffect(() => {
        getHabits()
            .catch((error) => {
                console.log(error);
            })
            .then((answer) => {
                setHabits(answer.data);
            });
    }, [renderHabits]);

    function confirmDelete(habitId) {
        const isConfirmed = window.confirm('Tem certeza de que gostaria de excluir esse hábito?');
        if (isConfirmed) {
            deleteHabit(habitId)
                .then(() => {
                    setRenderHabits(!renderHabits);
                });
        }
    }

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
            {newHabit ? <HabitForm setNewHabit={setNewHabit} renderHabits={renderHabits} setRenderHabits={setRenderHabits} /> : <></>}

            {habits ? (
                    habits.length === 0 ? (
                        <Span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Span>
                    ) : (
                        <ul>
                            {habits.map(habit => (
                                <Habit key={habit.id} {...habit} confirmDelete={confirmDelete} />
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