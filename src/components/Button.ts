import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const StyledButton = styled.button`
    ${font({ weight: 500, Fmax: 16, Fmin: 12 })}
    color: ${theme.colors.font};
    background-color: transparent;
    border: 2px solid ${theme.colors.font};
    border-radius: 30.5px;
    width: 186px;
    height: 60px;
    margin: 0 auto;
    cursor: pointer;

    &:hover {
        color: ${theme.colors.accent};
        border: 2px solid ${theme.colors.accent};
    }

    @media ${theme.media.tablet} {
        width: 156px;
        height: 50px;
    }
`