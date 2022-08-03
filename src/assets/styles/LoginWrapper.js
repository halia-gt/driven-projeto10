import styled from "styled-components";

export const LoginWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        margin-top: 75px;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 80vw;
        margin: 25px 0;
    }

    input {
        margin-bottom: 6px;
        font-size: 20px;
    }
`;