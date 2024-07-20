import styled from "styled-components"
import photo from "../../../assets/images/Photo.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper"

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <MainTitle>Graphic Designer</MainTitle>
                    <Name>Hello I’m Daniel Bryan</Name>
                    <Span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit..
                    </Span>
                </div>
                <Photo src={photo} alt="" />
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #161D2A;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle = styled.h1`
color: #CCCCCC;
    
`

const Name = styled.h2`
color: #CCCCCC;
`
const Span = styled.span`
color: #CCCCCC;
`