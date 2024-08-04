import styled from "styled-components"
import { theme } from "../../../styles/Theme"


const TabMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 360px;
        width: 100%;
        margin: 0 auto 50px;
    };

    @media ${theme.media.mobile} {
        ul {
            /* flex-direction: column; */
            gap: 10px;
        }
    }
`

const ListItem = styled.li`

`


const Wrapper = styled.div`
    display: none;
    position: absolute;
    top: 200px;
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
    height: 300px;
    object-fit: cover;
    z-index: 0;

    @media ${theme.media.mobile} {
        width: 250px;
        height: 200px;
    } 
`

const Work = styled.div`
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


const Portfolio = styled.section`
`

export const S = {
    TabMenu,
    ListItem,
    Wrapper,
    Image,
    Work,
    Title,
    Text,
    Portfolio
}