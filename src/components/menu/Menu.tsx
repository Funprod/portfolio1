import styled from "styled-components"


export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Store</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        list-style-type: none;

    };

    li {
        color: #CCCCCC;
    }

    a {
        color: #CCCCCC;
        text-decoration: none;

    }
`