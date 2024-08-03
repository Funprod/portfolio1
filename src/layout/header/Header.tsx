import React from "react";
import { Logo } from "../../components/logo/Logo";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { DesktopMenu } from "./HeaderMenu/desktopMenu/DesktopMenu";
import { MobileMenu } from "./HeaderMenu/mobileMenu/MobileMenu";
import { S } from "./Header_Styles"

const item = ["Home", "Skills", "Portfolio", "Feedbacks", "Contact",]

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo />
                    {width < breakpoint
                        ? <MobileMenu menuItems={item} />
                        : <DesktopMenu menuItems={item} />}
                </FlexWrapper>
            </Container>
        </S.Header>
    )
};
