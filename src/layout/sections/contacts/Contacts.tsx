import { SectionTitle } from "../../../components/SectionTitle"
import { StyledButton } from "../../../components/Button"
import { Accent } from "../../../components/Accent"
import { Container } from "../../../components/Container"
import React from "react"
import { S } from "./Contacts_Styles"

export const Contacts: React.FC = () => {
    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Let’s work <Accent>Together</Accent></SectionTitle>
                <S.Form>
                    <S.Filed placeholder={"Name"} />
                    <S.Filed placeholder={"Subject"} />
                    <S.Filed placeholder={"Message"} as={"textarea"} />
                    <StyledButton type={"submit"}>Contact me</StyledButton>
                </S.Form>
            </Container>
        </S.Contacts>
    )
}