import { Link } from "../../../../components/Link"
import { Icon } from "../../../../components/icon/Icon"
import React from "react"
import { S } from "../Portfolio_Styles"

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.Image src={props.src} alt="" />
            <S.Wrapper>
                <S.Title>
                    {props.title}
                    <Link href={"#"}><Icon iconId="arrow" width="23px" height="15px" viewBox="0 0 23 15" /></Link>
                </S.Title>
                <S.Text>{props.text}</S.Text>
            </S.Wrapper>
        </S.Work>
    )
}
