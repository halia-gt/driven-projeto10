import styled from "styled-components";

export default function P({children}) {
    return (
        <Wrapper>{children}</Wrapper>
    );
}

const Wrapper = styled.p`
    font-size: 14px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`;
