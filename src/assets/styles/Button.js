import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function Button({children, height = '45px', width = '100%', fontSize = '20px', type = 'button', disabled = false, ...otherProps}) {
    return (
        <Wrapper height={height} width={width} fontSize={fontSize} disabled={disabled} type={type} {...otherProps} >
            {disabled ? (
                <div>
                    <ThreeDots
                        width={width === '100%' ? "80px" : "50px" }
                        height="35px"
                        radius="9"
                        color="#FFFFFF"
                        ariaLabel="three-dots-loading"
                    />
                </div> 
                ) : children }
        </Wrapper>
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

    div {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    svg {
        margin: 0;
    }

    &:disabled {
        opacity: 0.7;
    }
`;
