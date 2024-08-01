import styled from "styled-components"
import { Link } from "../../../../components/Link"
import { theme } from "../../../../styles/Theme"


export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>

                {props.menuItems.map((item: string, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    )
}

const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 360px;
        width: 100%;
        border: 1px solid green;
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
