import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Container } from "../../components/Container"
import { S } from "./Footer_Styles"
import React from "react"

const socialItemData = [
    {
        iconId: "footer1",
        width: "21px",
        height: "21px",
        viveBox: "0 0 55 30",
    },
    {
        iconId: "footer2",
        width: "21px",
        height: "21px",
        viveBox: "0 3 40 30",
    },
    {
        iconId: "footer3",
        width: "21px",
        height: "21px",
        viveBox: "0 -6 30 30",
    },
    {
        iconId: "footer4",
        width: "21px",
        height: "21px",
        viveBox: "0 -6 30 30",
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.Flex>
                    <S.Copyright>© 2021 <S.B>Templates Jungle.</S.B> All rights reserved</S.Copyright>
                    <S.SocialList>
                        {socialItemData.map((s, index) => {
                            return (
                                <S.SocialItem key={index}>
                                    <S.SocialLink>
                                        <Icon iconId={s.iconId} width={s.width} height={s.height} viewBox={s.viveBox} />
                                    </S.SocialLink>
                                </S.SocialItem>
                            )
                        })}
                    </S.SocialList>
                </S.Flex>
            </Container>
        </S.Footer>
    )
}
