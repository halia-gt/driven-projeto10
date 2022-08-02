import styled from "styled-components";
import { IconContext } from "react-icons";
import { BsCheckSquareFill } from "react-icons/bs";

export default function TodayHabit() {
    return (
        <LiWrapper>
            <section>
                <h3>
                    Ler 1 capítulo de livro
                </h3>
                <p>
                    Sequência atual: <Span selected={true}>4 dias</Span>
                </p>
                <p>
                    Seu recorde: <Span>5 dias</Span>
                </p>
            </section>
            <IconContext.Provider value={{ color: "#EBEBEB", size: "69px" }}>
                <BsCheckSquareFill />
            </IconContext.Provider>
        </LiWrapper>
    );
}

const LiWrapper = styled.li`
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;

    section {
        padding: 0;
    }

    h3 {
        color: #666666;
        font-size: 20px;
        margin-bottom: 8px;
    }

    p {
        color: #666666;
        font-size: 13px;
        margin-bottom: 3px;
    }
`;

const Span = styled.span`
    color: ${props => props.selected ? '#8FC549' : '#666666'};
`;