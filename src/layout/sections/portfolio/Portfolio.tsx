import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"

import { FlexWrapper } from "../../../components/FlexWrapper"
import { Work } from "./work/Work"
import projImg1 from "./../../../assets/images/Proj-1.webp"
import projImg2 from "./../../../assets/images/proj-2.webp"
import projImg3 from "./../../../assets/images/proj-3.webp"
import projImg4 from "./../../../assets/images/proj-4.webp"
import projImg5 from "./../../../assets/images/proj-5.webp"
import projImg6 from "./../../../assets/images/proj-6.webp"
import { Accent } from "../../../components/Accent"
import { Container } from "../../../components/Container"
import { TabMenu } from "./tabMenu/TabMenu"


const portfolioItem = ["All", "Branding", "T-Shirt", "Package", "Poster",]

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <SectionTitle>My <Accent>Portfolio</Accent></SectionTitle>
                <TabMenu menuItems={portfolioItem} />
                <FlexWrapper wrap={"wrap"} justify={"center"} gap="20px">
                    <Work title={"Ultra Jot Coffee"} text={"Package Design"} src={projImg1} />
                    <Work title={"Ultra Jot Coffee"} text={"Package Design"} src={projImg2} />
                    <Work title={"Ultra Jot Coffee"} text={"Package Design"} src={projImg3} />
                    <Work title={"Ultra Jot Coffee"} text={"Package Design"} src={projImg4} />
                    <Work title={"Ultra Jot Coffee"} text={"Package Design"} src={projImg5} />
                    <Work title={"Ultra Jot Coffee"} text={"Package Design"} src={projImg6} />
                </FlexWrapper>
            </Container>
        </StyledPortfolio>
    )
}

const StyledPortfolio = styled.section`
`