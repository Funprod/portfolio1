import photo from "../../../assets/images/Ava.jpg"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Container } from "../../../components/Container"
import { Accent } from "../../../components/Accent"
import React from "react"
import { S } from "./Main_Styles"
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <S.TextWrapper>
                        <S.MainTitle>
                            <p>Front-end web developer</p>
                            <Typewriter
                                options={{
                                    strings: ['Front-end web developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                        <S.Name>Hello I’m <Accent>Andrey</Accent></S.Name>
                        <S.SmallText>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, modi!
                        </S.SmallText>
                    </S.TextWrapper>
                    <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="" />
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    )
}