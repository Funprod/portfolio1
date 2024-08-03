import { Link } from "../../../../components/Link"
import React from "react"
import { S } from "../Portfolio_Styles"


export const TabMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.TabMenu>
            <ul>
                {props.menuItems.map((item: string, index) => {
                    return <S.ListItem key={index}>
                        <Link href="">{item}</Link>
                    </S.ListItem>
                })}
            </ul>
        </S.TabMenu>
    )
}

