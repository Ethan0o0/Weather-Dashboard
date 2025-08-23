import {Middle} from '../Components/Middle.jsx'

export function Current(props){
    return(
        <Middle 
            temp={props.temp}
            humidity={props.humidity}
            visibility={props.visibility}
            wind={props.wind}
            unit={props.unit}
        />
    )
}