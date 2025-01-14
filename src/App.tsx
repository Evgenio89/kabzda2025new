import './App.css'
import {Accordion} from "./components/Accordion/Accordion.tsx";
import {Rating} from "./components/Rating/Rating.tsx";
import {OnOff} from "./components/OnOff/OnOff.tsx";
import {NotControlledAccordion} from "./components/Accordion/NotControlledAccordion.tsx";
import {NotControlledRating} from "./components/Rating/NotControlledRating.tsx";

function App() {



    console.log('App')
    return (
        <div className="App">
            <NotControlledRating />
            <NotControlledAccordion title={'NotControlledAccordion'}/>
            <OnOff />
            <OnOff />
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>

            <Rating value={2}/>
            <Accordion title={'First name accordion'} collapsed={true}/>
            <Accordion title={'Second name accordion'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    )
}

type PageTitleType ={
    title: string
}

function PageTitle(props: PageTitleType) {
    console.log('PageTitle')
    return (
        <h1>{props.title}</h1>
    )
}


export default App
