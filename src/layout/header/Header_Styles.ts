import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
    background-color: ${theme.colors.primaryBg};
    opacity: 0.9;
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`
export const S = {
    Header,
}