import { SectionTitle } from "../../../components/SectionTitle";
import { StyledButton } from "../../../components/Button";
import { Accent } from "../../../components/Accent";
import { Container } from "../../../components/Container";
import React, { ElementRef, useRef } from "react";
import { S } from "./Contacts_Styles";
import emailjs from '@emailjs/browser';

export const Contacts: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_p88lqxh', 'template_ux5cgxa', form.current, {
                publicKey: 'fdWCxq8j3BWysEa3Z',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };

    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Let’s work <Accent>Together</Accent></SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Filed required placeholder={"Name"} name={"user_name"} />
                    <S.Filed required placeholder={"Email"} name={"email"} />
                    <S.Filed required placeholder={"Subject"} name={"subject"} />
                    <S.Filed required placeholder={"Message"} as={"textarea"} name={"message"} />
                    <StyledButton type={"submit"}>Contact me</StyledButton>
                </S.Form>
            </Container>
        </S.Contacts>
    )
}