import {useState} from "react";

type AccordionType = {
    title: string;

}

export function NotControlledAccordion(props: AccordionType) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <AccordionTitle title={props.title} callBack={() => setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/> }
        </>
    )

}







type AccordionTitleType = {
    title: string
    callBack: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <>
            <h3 onClick={() => {props.callBack()}}>{props.title}</h3>
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