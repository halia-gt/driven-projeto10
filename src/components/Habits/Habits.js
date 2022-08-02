import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HabitForm from "./HabitForm";
import Button from "../common/Button";
import Habit from "./Habit";

export default function Habits() {
    return (
        <>
            <Header />
            <Wrapper>
                <div>
                    <h2>
                        Meus hábitos
                    </h2>
                    <Button height="35px" width="40px" fontSize="27px">
                        +
                    </Button>
                </div>
                <HabitForm />
                <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
                <ul>
                    <Habit />
                    <Habit />
                </ul>

            </Wrapper>
            <Footer />
        </>

    );
}

const Wrapper = styled.div`
    width: 90vw;
    margin: 72px auto;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 20px 0;
    }

    h2 {
        color: #126BA5;
        font-size: 23px;
    }

    span {
        width: 100%;
        font-size: 18px;
        color: #666666;
    }
`;