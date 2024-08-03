import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { S } from "../Skills_Styles";
import React from "react";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction="column" align="center">
                <Icon iconId={props.iconId} width="50px" height="50px" viewBox="0 0 115 140" />
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.description}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    )
};
