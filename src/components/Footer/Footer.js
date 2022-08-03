import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function Footer() {
    const percentage = 66;
    return (
        <Wrapper>
            <Link to="/habitos">
                <p>Hábitos</p>
            </Link>
            <Link to="/hoje">
                <div>
                    <CircularProgressbar
                        value={percentage}
                        text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#ffffff",
                            pathColor: "#ffffff",
                            trailColor: "transparent"
                        })}
                    />
                </div>
            </Link>
            <Link to="/historico">
                <p>Histórico</p>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    width: 100vw;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    p {
        font-size: 18px;
        color: #52B6FF;
    }

    div {
        width: 91px;
        height: 91px;
        position: absolute;
        bottom: 10px;
        right: calc(50vw - (91px/2));
    }
`;