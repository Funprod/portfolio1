import React from "react"
import { Icon } from "../icon/Icon"
import { S } from "./Logo_Styles"

export const Logo: React.FC = () => {
    return (
        <S.Logo>
            <S.Link href="">
                <S.Text>Andrey</S.Text>
                <S.HeaderIcon>
                    <Icon iconId={"logo"} viewBox={"0 0 10 10"} width="10px" height="10px" />
                </S.HeaderIcon>
            </S.Link>
        </S.Logo>
    )
}

