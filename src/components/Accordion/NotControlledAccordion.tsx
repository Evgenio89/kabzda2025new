import {useState} from "react";

type AccordionType = {
    title: string;

}

export function NotControlledAccordion(props: AccordionType) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <AccordionTitle title={props.title} setCollapsed={setCollapsed} collapsed={collapsed} />
            {!collapsed && <AccordionBody/> }
        </>
    )

}







type AccordionTitleType = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <>
            <h3 onClick={() => {props.setCollapsed(!props.collapsed)}}>{props.title}</h3>
        </>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}