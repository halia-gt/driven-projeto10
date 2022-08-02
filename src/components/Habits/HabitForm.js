import styled from "styled-components";
import Button from "../common/Button";
import P from "../common/P";

export default function HabitForm() {

    const selected = true;
    return (
        <>
            <FormWrapper>
                <input placeholder="nome do hábito"></input>
                <section>
                    <H4 selected={false}>D</H4>
                    <H4 selected={selected}>S</H4>
                    <H4 selected={selected}>T</H4>
                    <H4 selected={false}>Q</H4>
                    <H4 selected={false}>Q</H4>
                    <H4 selected={false}>S</H4>
                    <H4 selected={false}>S</H4>
                </section>
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

    section {
        display: flex;
        margin-top: 8px;
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

const H4 = styled.h4`
    width: 30px;
    height: 30px;
    background-color: ${props => props.selected ? '#CFCFCF' : '#FFFFFF'};
    color: ${props => props.selected ? '#FFFFFF' : '#CFCFCF'};
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    margin-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;