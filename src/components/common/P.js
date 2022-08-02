import styled from "styled-components";

export default function P({children, fontSize = '18px', textDecoration = "none"}) {
    return (
        <Wrapper fontSize={fontSize} textDecoration={textDecoration}>{children}</Wrapper>
    );
}

const Wrapper = styled.p`
    font-size: ${props => props.fontSize};
    text-align: center;
    text-decoration-line: ${props => props.textDecoration};
    color: #52B6FF;
`;
