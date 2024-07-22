import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"

export const Footer = () => {
    return (
        <StyledFooter>
            <Name>Daniel</Name>
            <FlexWrapper direction={"row-reverse"} align={"center"} justify="space-around">
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
                <Copyright>© 2021 Templates Jungle. All rights reserved</Copyright>
            </FlexWrapper>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #161D2A;
    min-height: 20vh;
`
const SocialList = styled.ul`
    
`
const SocialItem = styled.ul`
display: flex;
gap: 10px;
`
const SocialLink = styled.a`
    
`
const Copyright = styled.small`
    color: #CCCCCC;
`

const Name = styled.h3`
text-align: center;
    color: #CCCCCC;
`