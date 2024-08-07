import styled, { css } from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a<{active?: boolean}>`
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 5px;
    transition: ${theme.animations.transition};


    &:hover {
        color: ${theme.colors.accent};
    }

    ${props => props.active && css<{active?: boolean}>`
        color: ${theme.colors.accent};
    `}
`