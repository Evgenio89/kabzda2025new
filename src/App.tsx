import './App.css'
import {Accordion} from "./components/Accordion/Accordion.tsx";
import {Rating} from "./components/Rating/Rating.tsx";

function App() {
    console.log('App')
    return (
        <>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>

            <Rating value={2}/>
            <Accordion title={'First name accordion'}/>
            <Accordion title={'Second name accordion'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </>
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
