import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"
import { theme } from "../../styles/Theme"

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"row-reverse"} justify="space-around">
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"footer1"} width={"21px"} height={"21px"} viewBox={"0 10 55 30"} />
                        </SocialLink>
                        <SocialLink>
                            <Icon iconId={"footer2"} width={"21px"} height={"21px"} viewBox={"0 10 40 30"} />
                        </SocialLink>
                        <SocialLink>
                            <Icon iconId={"footer3"} width={"21px"} height={"21px"} viewBox={"0 0 30 30"} />
                        </SocialLink>
                        <SocialLink>
                            <Icon iconId={"footer4"} width={"21px"} height={"21px"} viewBox={"0 0 30 30"} />
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2021 <B>Templates Jungle.</B> All rights reserved</Copyright>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: ${theme.colors.secondaryBg};
    padding: 40px 0;
    
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
`
const B = styled.b`
    color: ${theme.colors.accent};
`