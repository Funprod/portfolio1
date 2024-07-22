import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const item = ["Home", "About", "Services", "Store", "Blog", "Contact",]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={item} />
        </StyledHeader>
    )
};

const StyledHeader = styled.header`
    background-color: #161D2A;
    display: flex;
    justify-content: space-between;
`