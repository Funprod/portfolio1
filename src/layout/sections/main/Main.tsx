import styled from "styled-components"
import photo from "../../../assets/images/Ava1.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"
import { Accent } from "../../../components/Accent"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <MainTitle>Front-end web developer</MainTitle>
                        <Name>Hello I’m <Accent>Andrey</Accent></Name>
                        <SmallText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                        </SmallText>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt="" />
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #161D2A;
    display: flex;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        width: 360px;
        height: 470px;
        border: 3px solid ${theme.colors.accent};

        position: absolute;
        top: -24px;
        left: 15px;
        z-index: -1;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle = styled.h1`
    font-weight: 500;
    font-size: 18px;
    opacity: 0.8;
`

const Name = styled.h2`
    font-weight: 700;
    font-size: 60px;
    margin: 10px 0;
`
const SmallText = styled.h2`
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 16px;
    opacity: 0.8;
`