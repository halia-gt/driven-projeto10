import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function postRegister(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

function postHabit(body) {
    const promise = axios.post(`${BASE_URL}/habits`, body);
    return promise;
}

function getHabits() {
    const promise = axios.get(`${BASE_URL}/habits`);
    return promise;
}

function deleteHabit(habitId, headers) {
    const promise = axios.delete(`${BASE_URL}/habits/${habitId}`, { headers });
    return promise;
}

function getHabitsToday() {
    const promise = axios.get(`${BASE_URL}/habits/today`);
    return promise;
}

function postHabitsCheck(habitId, headers) {
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/check`, { headers });
    return promise;
}

function postHabitsUncheck(habitId, headers) {
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/uncheck`, { headers });
    return promise;
}

function getHistory() {
    const promise = axios.get(`${BASE_URL}/habits/history/daily`);
    return promise;
}


export { postRegister, postLogin, postHabit, getHabits, deleteHabit, getHabitsToday, postHabitsCheck, postHabitsUncheck, getHistory };