import './Components.css'

export function Head(){
    return(
        <>
            <div className="Top">
                <h1 className='weather-logo'>Weather</h1>
                <div className='top-buttons'>
                    <h2>Today</h2>
                    <h2>Tommorow</h2>
                    <h2>Weekly</h2>
                </div>
            </div>
            <input type="text" placeholder='Search Location' className='search-bar'/>
        </>
    )
}

export function Middle(){
    return(
        <>
            <div className='weather-card'>
                <div className='main-content'>
                    <p>Wed, Jul 23</p>
                    <h3>Minneapolis, MN</h3>
                    <h1>70°F</h1>
                    <h3>Cloudy</h3>
                </div>
                <div className='data'>
                    <div className='humidity'>
                        Humidity
                        <div>
                            99%
                        </div>
                    </div>
                    <div className='visibility'>
                        Visibility
                        <div>
                            8km
                        </div>
                    </div>
                    <div className='wind'>
                        Wind
                        <div>
                            2mph
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
                    12:00 PM
                    <div>
                        70°F
                    </div>
                </div>
                <div className='time-icon'>
                    2:00 PM
                    <div>
                        70°F
                    </div>
                </div>
                <div className='time-icon'>
                    4:00 PM
                    <div>
                        70°F
                    </div>
                </div>
                <div className='time-icon'>
                    6:00 PM
                    <div>
                        70°F
                    </div>
                </div>
                <div className='time-icon'>
                    8:00 PM
                    <div>
                        70°F
                    </div>
                </div>
                <div className='time-icon'>
                    10:00 PM
                    <div>
                        70°F
                    </div>
                </div>
                <div className='time-icon'>
                    12:00 AM
                    <div>
                        70°F
                    </div>
                </div>
            </div>
        </>
    )
}