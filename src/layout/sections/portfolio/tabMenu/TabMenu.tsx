import { Link } from "../../../../components/Link"
import React from "react"
import { S } from "../Portfolio_Styles"

export type TabsStatusType = "all" | "branding" | "package" | "poster"

type TabMenuPropsType = {
    tabsItems: Array<{ status: TabsStatusType, title: string }>
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: string
}

export const TabMenu: React.FC<TabMenuPropsType>
    = (props: TabMenuPropsType) => {
        return (
            <S.TabMenu>
                <ul>
                    {props.tabsItems.map((item, index) => {
                        return <S.ListItem key={index}>
                            <Link active={props.currentFilterStatus === item.status} as={"button"} onClick={() => { props.changeFilterStatus(item.status) }}>{item.title}</Link>
                        </S.ListItem>
                    })}
                </ul>
            </S.TabMenu>
        )
    }

