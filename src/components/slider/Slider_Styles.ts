import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Slider = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
`
const Text = styled.p`
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-size: 18px;
    font-style: italic;
    letter-spacing: 1.5px;
    text-align: center;
`

const Name = styled.span`
    font-weight: 800;
    font-size: 16px;
`
const Image = styled.img`
    width: 55px;
    height: 55px;
    object-fit: cover;
    border-radius: 50%;
`

const Post = styled.p`
    margin-top: 5px;
    font-weight: 400;
    font-size: 12px;
    opacity: 0.8;
    letter-spacing: 1px;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 16px;
        height: 7px;
        margin: 5px;
        background-color: ${theme.colors.font};
        
            &.active {
                background-color: ${theme.colors.accent};
                width: 24px;
            }
    }

`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 34px 0;
`
const TextTestimony = styled.div`
    margin: 10px;
`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Image,
    Post,
    Pagination,
    Wrapper,
    TextTestimony
}