import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Link = styled.a`
    font-weight: 400;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 5px;


    &:hover {
        color: ${theme.colors.accent};
    }
`