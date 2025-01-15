import './App.css'
import {Accordion} from "./components/Accordion/Accordion.tsx";
import {Rating, RatingValueType} from "./components/Rating/Rating.tsx";
import {OnOff} from "./components/OnOff/OnOff.tsx";
import {NotControlledAccordion} from "./components/Accordion/NotControlledAccordion.tsx";
import {NotControlledRating} from "./components/Rating/NotControlledRating.tsx";
import {useState} from "react";
import {ControlOnOff} from "./components/ControlOnOff/ControlOnOff.tsx";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOff, setOnOff] = useState<boolean>(false)


    console.log('App')
    return (
        <div className="App">

            <ControlOnOff onOff={onOff} callBack={() => {
                setOnOff(!onOff)
            }}/>
            <Rating value={ratingValue} callBack={setRatingValue} ratingValue={ratingValue}/>
            <NotControlledRating/>
            <NotControlledAccordion title={'NotControlledAccordion'}/>
            <OnOff/>
            <OnOff/>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>


            <Accordion title={'First name accordion'} collapsed={accordionCollapsed} callBack={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }}/>
            <Accordion title={'Second name accordion'} collapsed={accordionCollapsed} callBack={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }}/>
        </div>
    )
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    console.log('PageTitle')
    return (
        <h1>{props.title}</h1>
    )
}


export default App
