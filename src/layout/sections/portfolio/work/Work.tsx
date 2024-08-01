import styled from "styled-components"
import { Link } from "../../../../components/Link"
import { Icon } from "../../../../components/icon/Icon"
import { theme } from "../../../../styles/Theme"

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt="" />
            <Wrapper>
                <Title>
                    {props.title}
                    <Link href={"#"}><Icon iconId="arrow" width="23px" height="15px" viewBox="0 0 23 15" /></Link>
                </Title>
                <Text>{props.text}</Text>
            </Wrapper>
        </StyledWork>
    )
}

const Wrapper = styled.div`
    display: none;
    position: absolute;
    top: 150px;
    z-index: 1;
    margin-left: 30px;
    max-width: 350px;
    width: 100%;

    @media ${theme.media.mobile} {
        max-width: 250px;
        width: 100%;
        top: 100px;
        margin-left: 20px;
    } 
`
const Image = styled.img`
    width: 350px;
    height: 250px;
    object-fit: cover;
    object-position: bottom;
    z-index: 0;

    @media ${theme.media.mobile} {
        width: 250px;
        height: 200px;
    } 
`

const StyledWork = styled.div`
    position: relative;

    &:hover {
        ${Wrapper} {
            display: block;
        }
        ${Image} {
            filter: brightness(50%);
        }
    }

    @media ${theme.media.tablet} {
        ${Wrapper} {
            display: block;
        }
        ${Image} {
            filter: brightness(50%);
        }
    } 
`


const Title = styled.h3`
    display: flex;
    gap: 80px;
    font-size: 18px;
    
    @media ${theme.media.mobile} {
        gap: 40px;
    } 
`

const Text = styled.p`
font-weight: 400;
font-size: 12px;
margin-top: 15px;
`