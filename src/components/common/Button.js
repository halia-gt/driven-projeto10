import styled from "styled-components";

export default function Button({children, size = '45px', type = 'button'}) {
    return (
        <Wrapper size={size}>{children}</Wrapper>
    );
}

const Wrapper = styled.button`
    color: #FFFFFF;
    background-color: #52B6FF;
    border-radius: 5px;
    border: none;
    text-align: center;
    height: ${props => props.size};
    font-size: 20px;
`;
