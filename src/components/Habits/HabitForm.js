import styled from "styled-components";
import HabitWeek from "./HabitWeek";
import Button from "../../assets/styles/Button";
import P from "../../assets/styles/P";

export default function HabitForm() {
    
    return (
        <>
            <FormWrapper>
                <input placeholder="nome do hábito"></input>
                <HabitWeek />
                <P>Cancelar</P>
                <Button height="35px" width="84px" fontSize="16px">
                    Salvar
                </Button>
            </FormWrapper>
        </>

    );
}

const FormWrapper = styled.form`
    padding: 18px;
    height: 180px;
    background-color: #FFFFFF;
    margin-bottom: 30px;
    position: relative;

    input {
        width: 100%;
    }

    button {
        position: absolute;
        bottom: 15px;
        right: 16px;
    }

    p {
        margin-top: 36px;
    }
`;