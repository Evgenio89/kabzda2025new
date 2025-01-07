import './App.css'

function App() {
    console.log('App')
    return (
        <>
                <AppTitle/>
                <Rating/>
                <Accordion/>
                <Rating/>
        </>
    )
}

function AppTitle () {
    console.log('AppTitle')
    return (
        <>
            This is APP component
        </>
    )
}

function Rating() {
    console.log('Rating')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Accordion () {
    console.log('Accordion')
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>
    )
}

function AccordionTitle () {
    return (
        <>
            <h3>Menu</h3>
        </>
    )
}

function AccordionBody () {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

function Star () {
   console.log('Star paint')
    return (
        <div>
            star
        </div>
    )
}

export default App
