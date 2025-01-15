type AccordionType = {
    title: string;
    collapsed: boolean
    callBack: () => void
}

export function Accordion(props: AccordionType) {
    console.log('Accordion')

        return (
            <>
                <AccordionTitle title={props.title} callBack={props.callBack}/>
                {!props.collapsed && <AccordionBody/> }
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