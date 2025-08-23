
export function Middle(props){
    return(
        <>
            <div className='weather-card'>
                <div className='main-content'>
                    <p>Wed, Jul 23</p>
                    <h3>Minneapolis, MN</h3>
                    <h1>{props.temp}{props.unit ? "°C" : "°F"}</h1>
                    <h3>Cloudy</h3>
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