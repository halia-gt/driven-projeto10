import styled from "styled-components";

export default function Input({ type, placeholder, name, value, updateData, disabled}) {
    return(
        <InputWrapper
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={updateData}
            disabled={disabled}
            required
        >
        </InputWrapper>
    );
}

const InputWrapper = styled.input`
    margin-bottom: 6px;
    font-size: 20px;
    background-color: ${props => props.disabled ? '#F2F2F2' : '#FFFFFF'};
`;