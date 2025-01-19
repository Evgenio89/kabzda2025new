import {useState} from "react";


type PropsOnOffType = {
    onChange: (onOff: boolean) => void;
}


export const OnOff = (props: PropsOnOffType) => {
    console.log('OnOff')
    const [onOff, setOnOff] = useState(true)


    /*const changingIndicatorOff = () => {
        setOnOff(onOff ? !onOff : false)
    }

    const changingIndicatorOn  = () => {
        setOnOff(!onOff ? !onOff : false)
    }*/


    const onStyle = {
        width: '40px',
        height: '25px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: onOff ? 'green' : 'white'
    }
    const offStyle = {
        width: '40px',
        height: '25px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        padding: '2px',
        backgroundColor: onOff ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: onOff ? 'green' : 'red'

    }

    const onClicked = () => {
        setOnOff(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOnOff(false)
        props.onChange(false)
    }


    return (

        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
        /* <div>
             <button>
                 On
             </button>
             <button>
                 Off
             </button>
             <svg width={16} height={16}>
                 <circle cx="8"
                         cy="8"
                         r="8"
                 />
             </svg>
         </div>*/


    )
}