import dayjs from "dayjs";
import { weekday } from "../common/weekData";
import styled from "styled-components";
import TodayHabit from "./TodayHabit";

export default function Today() {
    const day = dayjs().date();
    const month = dayjs().month() + 1;

    return (
        <Wrapper>
            <div>
                <h2>
                    {weekday}, {day}/{month}
                </h2>
                <H4 started={true}>
                    (67% dos hábitos concluídos)(Nenhum hábito concluído ainda)
                </H4>
            </div>
            <ul>
                <TodayHabit />
                <TodayHabit />
                <TodayHabit />
            </ul>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    width: 90vw;
    margin: 72px auto;

    div {
        width: 100%;
        padding: 20px 0;
    }

    h2 {
        color: #126BA5;
        font-size: 23px;
        margin-bottom: 3px;
    }
`;

const H4 = styled.h4`
    color: ${props => props.started ? '#8FC549' : '#BABABA'};
    font-size: 18px;
`;