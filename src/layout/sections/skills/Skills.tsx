import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"
import { Accent } from "../../../components/Accent"

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My <Accent>Skills</Accent></SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"center"}>
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
            </Container>
        </StyledSkills >
    )
}

const StyledSkills = styled.section`

`