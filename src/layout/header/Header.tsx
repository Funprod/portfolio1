import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";
import { theme } from "../../styles/Theme";

const item = ["Home", "Skills", "Portfolio", "Feedbacks", "Contact",]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo />
                    <HeaderMenu menuItems={item} />
                    <MobileMenu menuItems={item} />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
};

const StyledHeader = styled.header`
    background-color: ${theme.colors.primaryBg};
    opacity: 0.9;
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`