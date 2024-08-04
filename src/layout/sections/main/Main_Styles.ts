import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Main = styled.div`
    min-height: 100vh;
    background-color: #161D2A;
    display: flex;
`

const TextWrapper = styled.div`
    padding-top: 50px;
    @media ${theme.media.mobile} {
        text-align: center;
    }
`

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
${font({ weight: 500, Fmax: 20, Fmin: 18 })}
    opacity: 0.8;
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
    ${font({ family: "Lato", weight: 400, Fmax: 18, Fmin: 16 })}
    opacity: 0.8;
`

export const S = {
    Main,
    TextWrapper,
    PhotoWrapper,
    Photo,
    MainTitle,
    Name,
    SmallText
}