import styled from "styled-components"
import { Icon } from "../../../components/icon/Icon"
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Slogan } from "./slogan/Slogan"


export const Slogans = () => {
    return (
        <StyledSlogan>
            <SectionTitle>My job it: </SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"space-around"}>
                <Slogan iconId={"number3"} text={"Projects Completed"} />
                <Slogan iconId={"number4"} text={"Products Sold"} />
                <Slogan iconId={"number1"} text={"Awards Received"} />
                <Slogan iconId={"number2"} text={"Happy Clients"} />
            </FlexWrapper>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.section`
    min-height: 50vh;
    width: 100%;
    background-color: #161D2A;
`