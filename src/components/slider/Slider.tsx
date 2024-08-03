import imageEmma from "../../assets/images/emma.webp"
import { FlexWrapper } from "../FlexWrapper"
import { S } from "./Slider_Styles"


export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Dapibus eu placerat at nisl posuere aliquet amet pharetra malesuada.
                        Suspendisse nisl ac at tortor.
                    </S.Text>
                    <S.Wrapper>
                        <S.Image src={imageEmma} />
                        <S.TextTestimony>
                            <S.Name>Emma Brown</S.Name>
                            <S.Post>CEO - Squirrel Sweets</S.Post>
                        </S.TextTestimony>
                    </S.Wrapper>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </S.Pagination>
        </S.Slider>
    )
}