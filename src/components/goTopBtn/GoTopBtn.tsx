import styled from "styled-components"
import { Icon } from "../icon/Icon"
import { theme } from "../../styles/Theme"
import { animateScroll as scroll } from "react-scroll"
import { useEffect, useState } from "react"

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => { scroll.scrollToTop() }}>
                    <Icon iconId={"arrow-go-top"} width={"19"} height={"25"} viewBox={"0 0 16 15"} />
                </StyledGoTopBtn>
            )}
        </>
    )
}

const StyledGoTopBtn = styled.button`
    color: ${theme.colors.font};
    opacity: 0.8;
    padding: 8px;
    position: fixed;
    right: 30px;
    bottom: 30px;
    cursor: pointer;

    &:hover {
        color: ${theme.colors.accent};
    }

    @media ${theme.media.mobile} {
        right: 8px;
        bottom: 10px;
    }
`