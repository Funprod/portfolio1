import styled from "styled-components"
import { theme } from "../../styles/Theme"


const Footer = styled.footer`
    background-color: ${theme.colors.secondaryBg};
    padding: 40px 0;
`
const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media ${theme.media.mobile} {
            flex-direction: column;
            flex-direction: column-reverse;
        }
`

const SocialList = styled.ul`
        display: flex;
        gap: 10px;
`
const SocialItem = styled.ul`

`
const SocialLink = styled.a`
    color: ${theme.colors.font};

    &:hover {
        color: ${theme.colors.accent};
        transform: translateY(-10px);
    }
`
const Copyright = styled.small`
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 14px;
        @media ${theme.media.mobile} {
            padding-top: 20px;
        }
`
const B = styled.b`
    color: ${theme.colors.accent};
`
export const S = {
    Footer,
    Flex,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright,
    B
}