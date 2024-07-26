import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Slider } from "../../../components/slider/Slider"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Accent } from "../../../components/Accent"

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>My <Accent>Feedbacks</Accent></SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Slider />
            </FlexWrapper>
        </StyledTestimony>
    )
}

const StyledTestimony = styled.section`
background-color: #161D2A;
min-height: 50vh;
`