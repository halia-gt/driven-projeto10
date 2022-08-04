import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function Loading() {
    return(
        <LoadingWrapper>
            <ThreeDots
                radius="9"
                color="#52B6FF"
                ariaLabel="three-dots-loading"
            />
        </LoadingWrapper>
    );
}

const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
