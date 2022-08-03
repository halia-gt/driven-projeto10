import styled from "styled-components";

export default function Button({children, height = '45px', width = '100%', fontSize = '20px', type = 'button'}) {
    return (
        <Wrapper height={height} width={width} fontSize={fontSize}>{children}</Wrapper>
    );
}

const Wrapper = styled.button`
    color: #FFFFFF;
    background-color: #52B6FF;
    border-radius: 5px;
    border: none;
    text-align: center;
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: ${props => props.fontSize};
`;
