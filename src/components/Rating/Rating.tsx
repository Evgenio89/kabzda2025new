
export type RatingValueType =  0 | 1 | 2 | 3 | 4 | 5


type RatingType = {
    value: RatingValueType;
    callBack: (value: RatingValueType) => void;
    ratingValue: RatingValueType
}

export function Rating(props: RatingType) {
    console.log('Rating')

        return (
            <div>
                <Star selected={props.value > 0} callBack={props.callBack} ratingValue={1}/>
                <Star selected={props.value > 1} callBack={props.callBack} ratingValue={2}/>
                <Star selected={props.value > 2} callBack={props.callBack} ratingValue={3}/>
                <Star selected={props.value > 3} callBack={props.callBack} ratingValue={4}/>
                <Star selected={props.value > 4} callBack={props.callBack} ratingValue={5}/>
            </div>
        )


}

type StarType = {
    selected: boolean
    callBack: (value: RatingValueType) => void
    ratingValue: RatingValueType
}

function Star(props: StarType) {
       return (
           <span onClick={() => {props.callBack(props.ratingValue)}}>{props.selected ? <b>star </b> : 'star '}</span>
       )
}