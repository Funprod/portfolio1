import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction="column" align="center">
                <Icon iconId={props.iconId} width="50px" height="50px" viewBox="0 0 115 140" />
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    )
};

const StyledSkill = styled.div`
    width: 300px;
    padding: 40px 40px 40px;
`

const SkillTitle = styled.h3`
    margin: 0 0 15px;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 1px;
`

const SkillText = styled.p`
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    line-height: 1.4;
`
