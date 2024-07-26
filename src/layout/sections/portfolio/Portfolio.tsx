import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Menu } from "../../../components/menu/Menu"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Work } from "./work/Work"
import projImg1 from "./../../../assets/images/Proj-1.webp"
import projImg2 from "./../../../assets/images/proj-2.webp"
import projImg3 from "./../../../assets/images/proj-3.webp"
import projImg4 from "./../../../assets/images/proj-4.webp"
import projImg5 from "./../../../assets/images/proj-5.webp"
import projImg6 from "./../../../assets/images/proj-6.webp"
import { Accent } from "../../../components/Accent"


const portfolioItem = ["All", "Branding", "T-Shirt", "Package", "Poster",]

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <SectionTitle>My <Accent>Portfolio</Accent></SectionTitle>
            <Menu menuItems={portfolioItem} />
            <FlexWrapper justify="space-around" wrap={"wrap"}>
                <Work title={"ultra jot Coffee"} text={"Package Design"} src={projImg1} />
                <Work title={"ultra jot Coffee"} text={"Package Design"} src={projImg2} />
                <Work title={"ultra jot Coffee"} text={"Package Design"} src={projImg3} />
                <Work title={"ultra jot Coffee"} text={"Package Design"} src={projImg4} />
                <Work title={"ultra jot Coffee"} text={"Package Design"} src={projImg5} />
                <Work title={"ultra jot Coffee"} text={"Package Design"} src={projImg6} />
            </FlexWrapper>
        </StyledPortfolio>
    )
}

const StyledPortfolio = styled.section`
    min-height: 100vh;
    background-color: #161D2A;
`