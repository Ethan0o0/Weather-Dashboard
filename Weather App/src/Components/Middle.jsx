
export function Middle(props){
    return(
        <>
            <div className='weather-card'>
                <div className='main-content'>
                    <p>{props.currentDate}</p>
                    <h3>{props.city}</h3>
                    <h1>{props.temp}{props.unit ? "°C" : "°F"}</h1>
                    <h3>{props.description}</h3>
                </div>
                <div className='data'>
                    <div className='humidity'>
                        Humidity
                        <div>
                            {props.humidity}%
                        </div>
                    </div>
                    <div className='visibility'>
                        Visibility
                        <div>
                            {props.visibility}km
                        </div>
                    </div>
                    <div className='wind'>
                        Wind Speed
                        <div>
                            {props.wind}{props.unit ? "km/hr" : "mph"}
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}