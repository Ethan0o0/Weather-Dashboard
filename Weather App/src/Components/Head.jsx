import {Link, Outlet} from 'react-router-dom'

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
                    <Link to="/" className='links'>Today</Link>
                    <Link to="/forecast-5-day" className='links'>Weekly</Link>
                </div>
            </div>
            <div className='slider-and-searchbar'>
                <input type="text" placeholder='Search Location' className='search-bar'/>
                <div id='unit-switcher'>
                    F°
                    <label className="switch">
                        <input type="checkbox" checked={props.checked} onChange={props.change}/>
                        <span className="slider round"></span>
                    </label>
                    C°
                </div>
            </div>
            <main>
                <Outlet />
            </main>
        </>
    )
}