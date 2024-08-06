import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Slider } from "../../../components/slider/Slider"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Accent } from "../../../components/Accent"
import { Container } from "../../../components/Container"
import React from "react"

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id={"feedbacks"}>
            <Container>
                <SectionTitle>My <Accent>Feedbacks</Accent></SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <Slider />
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    )
}

const StyledTestimony = styled.section`
    position: relative;
    background-color: #161D2A;
    min-height: 50vh;
`