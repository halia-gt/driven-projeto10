import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function History() {
    return (
        <>
            <Header />
            <Wrapper>
                <h2>
                    Histórico
                </h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Wrapper>
            <Footer />
        </>
    );
}

const Wrapper = styled.div`
    width: 90vw;
    margin: 72px auto;

    h2 {
        color: #126BA5;
        font-size: 23px;
        padding: 20px 0;
    }

    p {
        font-size: 18px;
        color: #666666;
    }
`;