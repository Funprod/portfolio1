import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Logo = styled.div`

`

const Link = styled.a`
display: flex;
align-items: center;
color: ${theme.colors.font};
`

const Text = styled.h2`
`
const HeaderIcon = styled.div`
    margin-top: 15px;
`

export const S = {
    Logo,
    Link,
    Text,
    HeaderIcon
}