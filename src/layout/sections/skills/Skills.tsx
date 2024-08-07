import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"
import { Container } from "../../../components/Container"
import { Accent } from "../../../components/Accent"
import { S } from "./Skills_Styles"
import React from "react"
import { Fade } from "react-awesome-reveal";

const skillData = [
    {
        iconId: "skill-4",
        title: "REACT",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem.",
    },
    {
        iconId: "skill-5",
        title: "JAVASCRIPT",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem.",
    },
    {
        iconId: "skill-6",
        title: "NEXT JS",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem.",
    },
    {
        iconId: "skill-1",
        title: "EXPRESS JS",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem.",
    },
    {
        iconId: "skill-2",
        title: "GIT",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem.",
    },
    {
        iconId: "skill-3",
        title: "REACT NATIVE",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem.",
    },
    {
        iconId: "skill-7",
        title: "STYLED COMPONENTS",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem.",
    },
    {
        iconId: "skill-8",
        title: "TYPESCRIPT",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem.",
    },
    {
        iconId: "skill-9",
        title: "REDUX",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem.",
    },
    {
        iconId: "skill-10",
        title: "DOCKER",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem.",
    },
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={"Skills"}>
            <Container>
                <SectionTitle>My <Accent>Skills</Accent></SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"center"}>
                    <Fade cascade={true} damping={0.2}>
                        {skillData.map((s, index) => {
                            return <Skill iconId={s.iconId} key={index}
                                title={s.title}
                                description={s.description} />
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    )
}

