import styled from "styled-components"
import { Icon } from "../icon/Icon"
import { theme } from "../../styles/Theme"

export const Logo = () => {
    return (
        <StyledLogo>
            <StyledLink href="">
                <StyledText>Andrey</StyledText>
                <HeaderIcon>
                    <Icon iconId={"logo"} viewBox={"0 0 10 10"} width="10px" height="10px" />
                </HeaderIcon>
            </StyledLink>
        </StyledLogo>
    )
}

const StyledLogo = styled.div`

`

const StyledLink = styled.a`
display: flex;
align-items: center;
color: ${theme.colors.font};
`

const StyledText = styled.h2`
`
const HeaderIcon = styled.div`
    margin-top: 15px;
`