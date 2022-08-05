import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Main, Title } from "../../assets/styles/Body";

export default function History() {
    const [day, setDay] = useState(new Date());

    return (
        <Main>
            <Title>
                Histórico
            </Title>
            <div>
                <Calendar 
                    value={day}
                />
            </div>
        </Main>
    );
}