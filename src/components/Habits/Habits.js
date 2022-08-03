import styled from "styled-components";
import { Main, Title, Span } from "../../assets/styles/Body";
import HabitForm from "./HabitForm";
import Button from "../../assets/styles/Button";
import Habit from "./Habit";

export default function Habits() {
    return (
        <Main>
            <TitleWrapper>
                <Title>
                    Meus hábitos
                </Title>
                <Button height="35px" width="40px" fontSize="27px">
                    +
                </Button>
            </TitleWrapper>
            <HabitForm />
            <Span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Span>
            <ul>
                <Habit />
                <Habit />
            </ul>

        </Main>

    );
}

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;