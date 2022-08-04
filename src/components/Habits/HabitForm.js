import { useContext, useState } from "react";
import styled from "styled-components";
import HabitDay from "./HabitDay";
import Button from "../../assets/styles/Button";
import P from "../../assets/styles/P";
import Input from "../../assets/styles/Input";
import { Ul } from "../../assets/styles/Body";
import { postHabit } from "../../services/trackit";
import UserContext from "../../context/UserContext";

export default function HabitForm({ setNewHabit, renderHabits, setRenderHabits }) {
    const { habitName, setHabitName } = useContext(UserContext);
    const [disabled, setDisabled] = useState(false);
    const {week, setWeek} = useContext(UserContext);
    
    function updateData(e) {
        setHabitName({
            ...habitName,
            [e.target.name]: e.target.value
        });
    }

    function selectWeekday(id) {
        const newWeek = week.map(day => {
            if (day.id === id) {
                return {
                    ...day,
                    selected: !day.selected
                };
            }
            return day;
        });

        setWeek(newWeek);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setDisabled(true);

        const days = week
            .filter(day => day.selected)
            .map(day => day.id);
        
        const body = {
            name: habitName.name,
            days
        }

        postHabit(body)
            .catch((error) => {
                alert(error.message);
                setDisabled(false);
            })
            .then(() => {
                setHabitName({name: ''});
                const newWeek = week.map(day => {
                    return {
                        ...day,
                        selected: false
                    }
                });

                setWeek(newWeek);
                setDisabled(false);
                setNewHabit(false);
                setRenderHabits(!renderHabits);
            })
    }

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="nome do hábito"
                name="name"
                value={habitName.name}
                updateData={updateData}
                disabled={disabled}
            />
            <Ul>
                {week.map(day => (<HabitDay key={day.id} day={day} selectWeekday={selectWeekday} disabled={disabled} />))}
            </Ul>
            <P setNewHabit={setNewHabit}>Cancelar</P>
            <Button height="35px" width="84px" fontSize="16px" type="submit" disabled={disabled}>
                Salvar
            </Button>
        </FormWrapper>
    );
}

const FormWrapper = styled.form`
    padding: 18px;
    height: 180px;
    background-color: #FFFFFF;
    margin-bottom: 30px;
    position: relative;

    input {
        width: 100%;
    }

    button {
        position: absolute;
        bottom: 15px;
        right: 16px;
    }

    p {
        margin-top: 36px;
    }
`;
