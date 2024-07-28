import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { StyledButton } from "../../../components/Button"
import { Accent } from "../../../components/Accent"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Let’s work <Accent>Together</Accent></SectionTitle>
                <StyledForm>
                    <Filed placeholder={"Name"} />
                    <Filed placeholder={"Subject"} />
                    <Filed placeholder={"Message"} as={"textarea"} />
                    <StyledButton type={"submit"}>Contact me</StyledButton>
                </StyledForm>
            </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`

`
const StyledForm = styled.form`
    max-width: 550px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin: 0 auto;

    textarea {
        resize: none;
        height: 150px;
    }
`
const Filed = styled.input`
    width: 100%;
    border: 1px solid ${theme.colors.secondaryBg};
    background-color: ${theme.colors.secondaryBg};
    padding: 7px 15px;

    font-family: "Raleway", sans-serif;
    font-weight: 400;
    letter-spacing: 0.05em;
    font-size: 12px;

    color: ${theme.colors.font};

    &:focus-visible {
        outline: 1px solid ${theme.colors.accent};
    }
`