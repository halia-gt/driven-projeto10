import styled from "styled-components";
import teste from "../../assets/img/imagem-teste.jpeg";

export default function Header() {
    return (
        <Wrapper>
            <h1>TrackIt</h1>
            <img src={teste} alt="Foto de perfil" />
        </Wrapper>
    );
}

const Wrapper = styled.header`
    width: 100vw;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    h1 {
        font-family: 'Playball';
        color: #FFFFFF;
        font-size: 39px;
    }

    img {
        clip-path: circle();
        width: 51px;
    }
`;