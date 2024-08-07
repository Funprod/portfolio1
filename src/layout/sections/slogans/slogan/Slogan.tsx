import { Icon } from "../../../../components/icon/Icon"
import React from "react"
import { S } from "../Slogans_Styles"

type SloganPropsType = {
    iconId: string
    text: string
}

export const Slogan: React.FC<SloganPropsType> = (props: SloganPropsType) => {
    return (
        <S.Slogan id={"contact"}>
            <Icon iconId={props.iconId} width={"150"} height={"150"} viewBox={"0 0 215 10"} />
            <S.Text>{props.text}</S.Text>
        </S.Slogan>
    )
}