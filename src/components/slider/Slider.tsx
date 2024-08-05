import React from 'react';
import imageEmma from "../../assets/images/emma.webp"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './../../styles/slider.css'
import { S } from './Slider_Styles';

type SlidePropsType = {
    text: string
    userName: string
    userPost: string
    image: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Wrapper>
                <S.Image src={props.image} />
                <S.TextTestimony>
                    <S.Name>{props.userName}</S.Name>
                    <S.Post>{props.userPost}</S.Post>
                </S.TextTestimony>
            </S.Wrapper>
        </S.Slide>
    )
}

const items = [
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus eu placerat at nisl posuere aliquet amet pharetra malesuada. Suspendisse nisl ac at tortor."}
        userName={"Emma Brown"} userPost={"CEO - Squirrel Sweets"} image={imageEmma} />,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus eu placerat at nisl posuere aliquet amet pharetra malesuada. Suspendisse nisl ac at tortor."}
        userName={"Emma Brown"} userPost={"CEO - Squirrel Sweets"} image={imageEmma} />,
    <Slide text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus eu placerat at nisl posuere aliquet amet pharetra malesuada. Suspendisse nisl ac at tortor."}
        userName={"Emma Brown"} userPost={"CEO - Squirrel Sweets"} image={imageEmma} />,
];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
        />
    </S.Slider>
);

