import React from "react";
import { S } from "./../HeaderMenu_Styles"


const item = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "Skills",
        href: "Skills"
    },
    {
        title: "Portfolio",
        href: "portfolio"
    },
    {
        title: "Feedbacks",
        href: "feedbacks"
    },
    {
        title: "Contact",
        href: "contact"
    },
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {item.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink
                        activeClass="active"
                        to={item.href}
                        smooth={true}
                        spy={true}
                        offset={-10}
                    >
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    )
}

