import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"

type SloganPropsType = {
    iconId: string
    text: string
}

export const Slogan = (props: SloganPropsType) => {
    return (
        <StyledSlogan>
            <Icon iconId={props.iconId} width={"150"} height={"150"} viewBox={"0 0 210 5"} />
            <Text>{props.text}</Text>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.div`
    background-color: #161D2A;
    color: #CCCCCC;
`
const Text = styled.p`
    
`