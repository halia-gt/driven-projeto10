import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginWrapper } from "../../assets/styles/LoginWrapper";
import {ReactComponent as Logo} from "../../assets/img/logo.svg";
import Input from "../../assets/styles/Input";
import Button from "../../assets/styles/Button";
import P from "../../assets/styles/P";
import { postLogin } from "../../services/trackit";

export default function Login() {
    const [disabled, setDisabled] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    function updateData(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);

        postLogin(data)
            .catch((error) => {
                alert(error.message);
                setDisabled(false);
            })
            .then((answer) => {
                const token = answer.data.token;
                const image = answer.data.image;
                const authJSON = JSON.stringify({ token: token, image: image });
                localStorage.setItem('trackit', authJSON);

                navigate('/hoje');
            });
    }

    return (
        <LoginWrapper>
            <Logo />
            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={data.email}
                    updateData={updateData}
                    disabled={disabled}
                />
                <Input
                    type="password"
                    placeholder="senha"
                    name="password"
                    value={data.password}
                    updateData={updateData}
                    disabled={disabled}
                />
                <Button type="submit" disabled={disabled}>Entrar</Button>
            </form>
            <Link to="/cadastro">
                <P textDecoration="underline" fontSize="14px">Não tem uma conta? Cadastre-se!</P>
            </Link>
        </LoginWrapper>
    );
}