import dayjs from "dayjs";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { Main, Title } from "../../assets/styles/Body";
import { getHistory } from "../../services/trackit";
import Loading from "../common/Loading";
import P from "../../assets/styles/P";
import HistoryDay from "./HistoryDay";

export default function History() {
    var customParseFormat = require('dayjs/plugin/customParseFormat');
    dayjs.extend(customParseFormat);
    const [date, setDate] = useState(new Date());
    const [history, setHistory] = useState(null);
    const [apiDays, setApiDays] = useState([]);
    const [index, setIndex] = useState(0);
    const [showHabits, setShowHabits] = useState(false);

    useEffect(() => {
        getHistory()
            .catch((error) => {
                console.log(error);
            })
            .then((answer) => {
                setHistory(answer.data);
                const aux = answer.data.map(day => day.day);
                setApiDays(aux);
            });
    }, []);


    function tileClassName({ date, view }) {
        if (view === 'month') {
            const calendarDay = dayjs(date).format('DD/MM/YYYY');
            const today = dayjs().format('DD/MM/YYYY');
            if (apiDays.includes(calendarDay) && calendarDay !== today) {
                const i = apiDays.indexOf(calendarDay);
                const habits = history[i].habits;
                if (habits.some(habit => (habit.done === false))) {
                    return 'incomplete';
                } else {
                    return 'complete';
                }
            }
        }
    }

    function onClickDay(date) {
        const calendarDay = dayjs(date).format('DD/MM/YYYY');
        if (apiDays.includes(calendarDay)) {
            const i = apiDays.indexOf(calendarDay);
            setShowHabits(true);
            setIndex(i);
        }
    }

    return (
        <Main>
            <Title>
                Histórico
            </Title>
            <CalendarWrapper>
                {history ? (
                        <>
                            <Calendar
                                value={date}
                                onChange={setDate}
                                calendarType="US"
                                locale="pt-br"
                                formatDay={(locale, date) => dayjs(date).format('DD')}
                                tileClassName={tileClassName}
                                onClickDay={onClickDay}
                            />
                            {showHabits ? (
                                <>
                                    <Title>
                                        Hábitos do dia {history[index].day}
                                    </Title>
                                    <ul>
                                        {history[index].habits.map(habit => (
                                            <HistoryDay key={habit.id} name={habit.name} done={habit.done} />
                                        ))}
                                    </ul>
                                    <P setNewHabit={setShowHabits}>Cancelar</P>
                                </>
                            ) : (
                                <></>
                            )}

                        </>

                    ) : (
                        <Loading />
                    )
                }

            </CalendarWrapper>
        </Main>
    );
}

const CalendarWrapper = styled.div`
    .react-calendar {
        width: 100%;
        max-width: 500px;
        border-radius: 10px;
        border: none;
    }

    .complete, .incomplete {
        clip-path: circle();
    }

    .incomplete {
        background-color: #ea5766;
    }

    .complete {
        background-color: #8cc654;
    }
`;