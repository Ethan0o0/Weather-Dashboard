import {Fiveday} from '../Components/Fiveday.jsx'

export function Forecast(props){
    return(
        <Fiveday 
            dates={props.dates}
            dayNames={props.dayNames}
        />
    )
}