import {ReactComponent as Logo} from "../../assets/img/logo.svg";
import { LoginWrapper } from "../../assets/styles/LoginWrapper";
import Button from "../../assets/styles/Button";
import P from "../../assets/styles/P";

export default function SignUp() {
    return (
        <LoginWrapper>
            <Logo />
            <form>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <input placeholder="nome"></input>
                <input placeholder="foto"></input>
                <Button>Cadastrar</Button>
            </form>
            <P fontSize="14px" textDecoration="underline">Já tem uma conta? Faça login!</P>
        </LoginWrapper>
    );
}