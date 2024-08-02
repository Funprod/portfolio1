import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"
import { theme } from "../../styles/Theme"
import { Container } from "../../components/Container"

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Flex>
                    <Copyright>© 2021 <B>Templates Jungle.</B> All rights reserved</Copyright>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"footer1"} width={"21px"} height={"21px"} viewBox={"0 0 55 30"} />
                            </SocialLink>
                            <SocialLink>
                                <Icon iconId={"footer2"} width={"21px"} height={"21px"} viewBox={"0 3 40 30"} />
                            </SocialLink>
                            <SocialLink>
                                <Icon iconId={"footer3"} width={"21px"} height={"21px"} viewBox={"0 -6 30 30"} />
                            </SocialLink>
                            <SocialLink>
                                <Icon iconId={"footer4"} width={"21px"} height={"21px"} viewBox={"0 -6 30 30"} />
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                </Flex>
            </Container>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
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
    
`
const SocialItem = styled.ul`
    display: flex;
    gap: 10px;
`
const SocialLink = styled.a`
    color: ${theme.colors.font};

    &:hover {
        color: ${theme.colors.accent};
        transform: translateY(-4px);
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