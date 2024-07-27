import styled from "styled-components";
import { theme } from "../styles/Theme";

export const StyledButton = styled.button`
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.font};
    background-color: transparent;
    border: 2px solid ${theme.colors.font};
    border-radius: 30.5px;
    width: 186px;
    height: 60px;
    margin: 0 auto;

    &:hover {
        color: ${theme.colors.accent};
        border: 2px solid ${theme.colors.accent};
    }
`