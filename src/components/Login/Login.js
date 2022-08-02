import styled from "styled-components";
import {ReactComponent as Logo} from "../../assets/img/logo.svg";
import Button from "../common/Button";
import P from "../common/P";

export default function Login() {
    return (
        <Wrapper>
            <Logo />
            <form>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <Button>Entrar</Button>
            </form>
            <P textDecoration="underline" fontSize="14px">Não tem uma conta? Cadastre-se!</P>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        margin-top: 75px;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 80vw;
        margin: 25px 0;
    }

    input {
        margin-bottom: 6px;
        font-size: 20px;
    }
`;