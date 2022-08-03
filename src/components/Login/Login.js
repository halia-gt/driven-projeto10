import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { LoginWrapper } from "../../assets/styles/LoginWrapper";
import {ReactComponent as Logo} from "../../assets/img/logo.svg";
import Button from "../../assets/styles/Button";
import P from "../../assets/styles/P";

export default function Login() {
    const { token, setToken } = useContext(UserContext);
    return (
        <LoginWrapper>
            <Logo />
            <form>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <Button type="submit">Entrar</Button>
            </form>
            <P textDecoration="underline" fontSize="14px">Não tem uma conta? Cadastre-se!</P>
        </LoginWrapper>
    );
}