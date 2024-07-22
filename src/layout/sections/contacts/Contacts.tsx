import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { StyledButton } from "../../../components/Button"

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Let’s work together</SectionTitle>
            <StyledForm>
                <Filed placeholder={"Name"} />
                <Filed placeholder={"Subject"} />
                <Filed placeholder={"Message"} as={"textarea"} />
                <StyledButton type={"submit"}>Contact me</StyledButton>
            </StyledForm>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`
    background-color: #161D2A;
    min-height: 50vh;
`
const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`
const Filed = styled.input`
    border: 2px solid black;
    background-color: #161D2A;
`