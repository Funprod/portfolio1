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
import React from "react"
import { S } from "./Portfolio_Styles"


const portfolioItem = ["All", "Branding", "Package", "Poster",]

const WorkData = [
    {
        title: "Ultra Jot Coffee",
        text: "Package Design",
        src: projImg1,
    },
    {
        title: "Ultra Jot Coffee",
        text: "Package Design",
        src: projImg2,
    },
    {
        title: "Ultra Jot Coffee",
        text: "Package Design",
        src: projImg3,
    },
    {
        title: "Ultra Jot Coffee",
        text: "Package Design",
        src: projImg4,
    },
    {
        title: "Ultra Jot Coffee",
        text: "Package Design",
        src: projImg5,
    },
    {
        title: "Ultra Jot Coffee",
        text: "Package Design",
        src: projImg6,
    },
]

export const Portfolio: React.FC = () => {
    return (
        <S.Portfolio>
            <Container>
                <SectionTitle>My <Accent>Portfolio</Accent></SectionTitle>
                <TabMenu menuItems={portfolioItem} />
                <FlexWrapper wrap={"wrap"} justify={"center"} gap="20px">
                    {WorkData.map((w, index) => {
                        return <Work title={w.title} key={index}
                            text={w.text}
                            src={w.src} />
                    })}
                </FlexWrapper>
            </Container>
        </S.Portfolio>
    )
}