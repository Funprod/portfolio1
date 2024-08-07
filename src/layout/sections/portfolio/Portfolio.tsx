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
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu"
import React, { useState } from "react"
import { S } from "./Portfolio_Styles"
import { motion, AnimatePresence } from "framer-motion"


const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: "All",
        status: "all",
    },
    {
        title: "Branding",
        status: "branding",
    },
    {
        title: "Package",
        status: "package",
    },
    {
        title: "Poster",
        status: "poster",
    },
]

const worksData = [
    {
        title: "Ultra Jot Coffee",
        text: "Package Design",
        src: projImg1,
        type: "package",
        id: "1",
    },
    {
        title: "Ultra Jot Coffee",
        text: "Package Design",
        src: projImg2,
        type: "branding",
        id: "2",
    },
    {
        title: "Ultra Jot Coffee",
        text: "Package Design",
        src: projImg3,
        type: "branding",
        id: "3",
    },
    {
        title: "Ultra Jot Coffee",
        text: "Package Design",
        src: projImg4,
        type: "branding",
        id: "4",

    },
    {
        title: "Ultra Jot Coffee",
        text: "Package Design",
        src: projImg5,
        type: "poster",
        id: "5",
    },
    {
        title: "Ultra Jot Coffee",
        text: "Package Design",
        src: projImg6,
        type: "package",
        id: "6",
    },
]

export const Portfolio: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "branding") {
        filteredWorks = worksData.filter(work => work.type === "branding")
    }
    if (currentFilterStatus === "package") {
        filteredWorks = worksData.filter(work => work.type === "package")
    }
    if (currentFilterStatus === "poster") {
        filteredWorks = worksData.filter(work => work.type === "poster")
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Portfolio id={"portfolio"}>
            <Container>
                <SectionTitle>My <Accent>Portfolio</Accent></SectionTitle>
                <TabMenu tabsItems={tabsItems}
                    changeFilterStatus={changeFilterStatus}
                    currentFilterStatus={currentFilterStatus} />
                <FlexWrapper wrap={"wrap"} justify={"center"} gap="20px">
                    <AnimatePresence>
                        {filteredWorks.map((w) => {
                            return (
                                <motion.div
                                    layout={true}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key={w.id}
                                >
                                    < Work
                                        title={w.title}
                                        key={w.id}
                                        text={w.text}
                                        src={w.src} />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Portfolio >
    )
}