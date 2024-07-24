import styled from "styled-components"

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt="" />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>arrow</Link>
        </StyledWork>
    )
}

const StyledWork = styled.div`
background-color: #161D2A;
max-width: 620px;
width: 100%;
color: #CCCCCC;
`

const Image = styled.img`
width: 100%;
height: 500px;
object-fit: cover;
object-position: center;
`

const Link = styled.a`
    color: #CCCCCC;
`

const Title = styled.h3`

`

const Text = styled.p`
`