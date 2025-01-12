import {useState} from "react";

type AccordionType = {
    title: string;

}

export function NotControlledAccordion(props: AccordionType) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <AccordionTitle title={props.title}/>
            <button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/> }
        </>
    )

}







type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <>
            <h3>{props.title}</h3>
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