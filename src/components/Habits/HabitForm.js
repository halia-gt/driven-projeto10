import styled from "styled-components";
import P from "../common/P";

export default function HabitForm() {

    const selected = true;
    return (
        <>
            <Wrapper>
                <input placeholder="nome do hábito"></input>
                <section>
                    <H3 selected={false}>D</H3>
                    <H3 selected={selected}>S</H3>
                    <H3 selected={selected}>T</H3>
                    <H3 selected={false}>Q</H3>
                    <H3 selected={false}>Q</H3>
                    <H3 selected={false}>S</H3>
                    <H3 selected={false}>S</H3>
                </section>
                <P>Cancelar</P>
                <button className="button">Salvar</button>
            </Wrapper>
        </>

    );
}

const Wrapper = styled.form`
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

    .button {
        height: 35px;
        width: 84px;
        font-size: 16px;
        position: absolute;
        bottom: 15px;
        right: 16px;
    }

    p {
        margin-top: 36px;
    }
`;

const H3 = styled.h3`
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