import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {
    const percentage = 66;
    return (
        <Wrapper>
            <p>Hábitos</p>
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
            <p>Histórico</p>
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