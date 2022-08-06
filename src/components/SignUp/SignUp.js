import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { LoginWrapper } from "../../assets/styles/LoginWrapper";
import Input from "../../assets/styles/Input";
import Button from "../../assets/styles/Button";
import P from "../../assets/styles/P";
import { postSignUp } from "../../services/trackit";

export default function SignUp() {
    const [disabled, setDisabled] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: '',
        name: '',
        image: ''
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

        postSignUp(data)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                alert(error.message);
                setDisabled(false);
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
                <Input
                    type="text"
                    placeholder="nome"
                    name="name"
                    value={data.name}
                    updateData={updateData}
                    disabled={disabled}
                />
                <Input
                    type="url"
                    placeholder="foto"
                    name="image"
                    value={data.image}
                    updateData={updateData}
                    disabled={disabled}
                />
                <Button type="submit" disabled={disabled}>Cadastrar</Button>
            </form>
            <Link to="/">
                <P fontSize="14px" textDecoration="underline">Já tem uma conta? Faça login!</P>
            </Link>
        </LoginWrapper>
    );
}