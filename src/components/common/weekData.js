import dayjs from "dayjs";

const weekData = [
    {
        id: 0,
        name: 'D',
        dayName: 'Domingo',
        selected: false
    }, {
        id: 1,
        name: 'S',
        dayName: 'Segunda',
        selected: false
    }, {
        id: 2,
        name: 'T',
        dayName: 'Terça',
        selected: false
    }, {
        id: 3,
        name: 'Q',
        dayName: 'Quarta',
        selected: false
    }, {
        id: 4,
        name: 'Q',
        dayName: 'Quinta',
        selected: false
    }, {
        id: 5,
        name: 'S',
        dayName: 'Sexta',
        selected: false
    }, {
        id: 6,
        name: 'S',
        dayName: 'Sábado',
        selected: false
    }
];

const weekdayNumber = dayjs().day();
let weekday;

weekData.forEach(day => {
    if (day.id === weekdayNumber) {
        weekday = day.dayName;
    }
});

export { weekData, weekday };