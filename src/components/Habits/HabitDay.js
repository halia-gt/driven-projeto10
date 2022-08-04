import styled from "styled-components";

export default function HabitDay({ day, disabled, selectWeekday }) {

    return(
        <H4 selected={day.selected} onClick={disabled ? function() {} : () => selectWeekday(day.id)}>
            {day.name}
        </H4>
    );
}

export const H4 = styled.h4`
    width: 30px;
    height: 30px;
    background-color: ${props => props.selected ? '#CFCFCF' : '#FFFFFF'};
    color: ${props => props.selected ? '#FFFFFF' : '#CFCFCF'};
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    margin-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

