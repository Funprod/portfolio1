import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"
import { wrap } from "module"

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill
                    iconId={"skill-1"}
                    title={"EXPRESS JS"}
                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem."} />
                <Skill
                    iconId={"skill-2"}
                    title={"GIT"}
                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem."} />
                <Skill
                    iconId={"skill-3"}
                    title={"REACT NATIVE"}
                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem."} />
                <Skill
                    iconId={"skill-4"}
                    title={"REACT"}
                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem."} />
                <Skill
                    iconId={"skill-5"}
                    title={"JAVASCRIPT"}
                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem."} />
                <Skill
                    iconId={"skill-6"}
                    title={"NEXT JS"}
                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem."} />
                <Skill
                    iconId={"skill-7"}
                    title={"STYLED COMPONENTS"}
                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem."} />
                <Skill
                    iconId={"skill-8"}
                    title={"TYPESCRIPT"}
                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem."} />
                <Skill
                    iconId={"skill-9"}
                    title={"REDUX"}
                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem."} />
                <Skill
                    iconId={"skill-10"}
                    title={"DOCKER"}
                    description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, dolorem."} />
            </FlexWrapper>
        </StyledSkills >
    )
}

const StyledSkills = styled.section`
background-color: #161D2A;
min-height: 100vh;
`