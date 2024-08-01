import styled from "styled-components"
import photo from "../../../assets/images/Ava.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"
import { Accent } from "../../../components/Accent"
import { font } from "../../../styles/Common"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <TextWrapper>
                        <MainTitle>Front-end web developer</MainTitle>
                        <Name>Hello I’m <Accent>Andrey</Accent></Name>
                        <SmallText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                        </SmallText>
                    </TextWrapper>
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

const TextWrapper = styled.div``

const PhotoWrapper = styled.div`
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    /* outline: 5px solid ${theme.colors.accent}; */
    border-radius: 20px;
    

    @media ${theme.media.mobile} {
        width: 280px;
        height: 350px;
    } 
`

const MainTitle = styled.h1`
${font({ weight: 500, Fmax: 18, Fmin: 16 })}
    opacity: 0.8;
    padding-top: 20px;
`

const Name = styled.h2`
    ${font({ weight: 700, Fmax: 60, Fmin: 30 })}
    letter-spacing: 0.05em;
    margin: 10px 0;

    @media ${theme.media.mobile} {
        margin: 15px 0;
    }
`
const SmallText = styled.h2`
    ${font({ family: "Lato", weight: 400, Fmax: 16, Fmin: 14 })}
    opacity: 0.8;
`