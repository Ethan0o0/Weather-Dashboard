import './Components.css'

export function Head(props){
    return(
        <>
            <div className="Top">
                <div className='topleftwithlogo'>
                    <img src="../images/cloudy.png" alt="" id='main-logo' />
                    <h1 className='weather'>Weather</h1>
                    <h3>{props.time}</h3>
                </div>
                <div className='top-buttons'>
                    <a href='' className='links'>Today</a>
                    <a href='' className='links'>Tommorow</a>
                    <a href='' className='links'>Weekly</a>
                </div>
            </div>
            <input type="text" placeholder='Search Location' className='search-bar'/>
        </>
    )
}

export function Middle(props){
    return(
        <>
            <div className='weather-card'>
                <div className='main-content'>
                    <p>Wed, Jul 23</p>
                    <h3>Minneapolis, MN</h3>
                    <h1>{props.temp}°F</h1>
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
                        Wind
                        <div>
                            {props.wind}mph
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export function Bottom(){
    return (
        <>
            <div className='Bottom'>
                <div className='time-icon'>
                    Mon
                    <div>
                        70°F
                    </div>
                </div>
                <div className='time-icon'>
                    Tues
                    <div>
                        70°F
                    </div>
                </div>
                <div className='time-icon'>
                    Weds
                    <div>
                        70°F
                    </div>
                </div>
                <div className='time-icon'>
                    Thurs
                    <div>
                        70°F
                    </div>
                </div>
                <div className='time-icon'>
                    Fri
                    <div>
                        70°F
                    </div>
                </div>
            </div>
        </>
    )
}