import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { HeaderMenu } from "./headerMenu/HeaderMenu";

const item = ["Home", "Skills", "Portfolio", "Feedbacks", "Contact",]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo />
                    <HeaderMenu menuItems={item} />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
};

const StyledHeader = styled.header`
    background-color: rgba(15, 22, 36, .9);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`