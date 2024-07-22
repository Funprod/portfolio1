import styled from "styled-components"
import imageEmma from "../../assets/images/emma.webp"
import { FlexWrapper } from "../FlexWrapper"

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Dapibus eu placerat at nisl posuere aliquet amet pharetra malesuada.
                        Suspendisse nisl ac at tortor.
                    </Text>
                    <Image src={imageEmma} />
                    <Name>Emma Brown</Name>
                    <Post>CEO</Post>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    )
}

const StyledSlider = styled.div`
    border: 2px solid black;
    max-width: 500px;
    color: #CCCCCC;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`

    text-align: center;
`
const Text = styled.p`
`

const Name = styled.span`
`
const Image = styled.img`
    width: 50px;
    height: 50px;
    object-fit: fill;
    border-radius: 50%;
`

const Post = styled.p`
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 15px;
        height: 4px;
        margin: 5px;
        background-color: #CCCCCC;
    }
`