import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Slogan } from "./slogan/Slogan"
import { Accent } from "../../../components/Accent"
import { Container } from "../../../components/Container"


export const Slogans = () => {
    return (
        <StyledSlogan>
            <Container>
                <SectionTitle>Why <Accent>Me?</Accent></SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-around"}>
                    <Slogan iconId={"number3"} text={"Projects Completed"} />
                    <Slogan iconId={"number4"} text={"Products Sold"} />
                    <Slogan iconId={"number1"} text={"Awards Received"} />
                    <Slogan iconId={"number2"} text={"Happy Clients"} />
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`

`