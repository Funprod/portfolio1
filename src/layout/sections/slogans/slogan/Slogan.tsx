import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"

type SloganPropsType = {
    iconId: string
    text: string
}

export const Slogan = (props: SloganPropsType) => {
    return (
        <StyledSlogan>
            <Icon iconId={props.iconId} width={"150"} height={"150"} viewBox={"0 0 215 10"} />
            <Text>{props.text}</Text>
        </StyledSlogan>
    )
}

const StyledSlogan = styled.div`
    font-size: 18px;
    font-weight: 700;
`
const Text = styled.p`
    
`