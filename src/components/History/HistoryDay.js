import styled from "styled-components";
import { Li } from "../../assets/styles/Body";
import { IconContext } from "react-icons";
import { BsCheckSquareFill, BsXSquareFill } from "react-icons/bs";

export default function HistoryDay({ name, done }) {
    return (
        <LiWrapper>
            <h3>{name}</h3>
            <IconContext.Provider value={{ color: done ? "#8CC654" : "#EA5766", size: "40px" }}>
                {done ? <BsCheckSquareFill /> : <BsXSquareFill />}
            </IconContext.Provider>
        </LiWrapper>
    );
}

const LiWrapper = styled(Li)`
    margin-top: 10px;
`;