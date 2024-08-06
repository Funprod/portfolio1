import styled from "styled-components"
import { theme } from "../../../styles/Theme"

const Contacts = styled.section`
        position: relative;
`
const Form = styled.form`
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

export const S = {
    Contacts,
    Form,
    Filed,
}