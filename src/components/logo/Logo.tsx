import styled from "styled-components"
import { Icon } from "../icon/Icon"

export const Logo = () => {
    return (
        <StyledLogo>
            <StyledLink href="">
                <StyledText>Daniel</StyledText>
                <StyledIcon>
                    <Icon iconId={"logo"} viewBox={"0 0 50 50"} />
                </StyledIcon>
            </StyledLink>
        </StyledLogo>
    )
}

const StyledLogo = styled.div`

`

const StyledLink = styled.a`
display: flex;
color: #CCCCCC;
text-decoration: none
`

const StyledText = styled.h2`
        margin-bottom: 0;
`
const StyledIcon = styled.span`
    margin-top: 40px;
`