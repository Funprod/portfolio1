import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item: string, index) => {
                    return <ListItem key={index}>
                        <Link href="">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu >
    )
}

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    };
`

const Link = styled.a`
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: transparent;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 60%;
    overflow-y: hidden;
    /* outline: 1px solid red; */
    color: ${theme.colors.font};

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const ListItem = styled.li`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        height: 1.5px;
        background-color: ${theme.colors.accent};

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;

        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(1.3px);
            color: ${theme.colors.accent};
            & + ${Mask} {
                transform: skewX(12deg) translateX(-1.3px);
            }
        }

    }
`