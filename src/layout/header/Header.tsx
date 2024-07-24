import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { FlexWrapper } from "../../components/FlexWrapper";

const item = ["Home", "About", "Services", "Store", "Blog", "Contact",]

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify="space-around" align="center">
                <Logo />
                <Menu menuItems={item} />
            </FlexWrapper>
        </StyledHeader>
    )
};

const StyledHeader = styled.header`
    background-color: #161D2A;
`