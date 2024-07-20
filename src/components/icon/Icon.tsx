import styled from 'styled-components'
import iconsSprite from '../../assets/images/icon-sprite.svg'

type iconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: iconPropsType) => {
    return (
        <StyledIcon>
            <svg width={props.width || "50"} height={props.height || "50"}
                viewBox={props.viewBox || "0 0 150 150"}
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
            </svg>
        </StyledIcon>
    )
}

const StyledIcon = styled.div`

`