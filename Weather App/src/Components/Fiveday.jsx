
export function Fiveday({dates, dayNames, mainData, unit}){
    return (
        <>
            <div className='Bottom'>
                <div className='five-day'>
                    <div>
                        {dayNames[new Date(dates[0]).getDay()]} <br />
                        {mainData[0].main.temp}{unit ? "°C" : "°F"}
                    </div>
                    <div>
                        High <br /> {mainData[0].main.temp_max}{unit ? "°C" : "°F"}
                    </div>
                    <div>
                        Low <br /> {mainData[0].main.temp_min}{unit ? "°C" : "°F"}
                    </div>
                </div>
                <div className='five-day'>
                    <div>
                        {dayNames[new Date(dates[1]).getDay()]} <br />
                        {mainData[1].main.temp}{unit ? "°C" : "°F"}
                    </div>
                    <div>
                        High <br /> {mainData[1].main.temp_max}{unit ? "°C" : "°F"}
                    </div>
                    <div>
                        Low <br /> {mainData[1].main.temp_min}{unit ? "°C" : "°F"}
                    </div>
                </div>
                <div className='five-day'>
                    <div>
                        {dayNames[new Date(dates[2]).getDay()]} <br />
                        {mainData[2].main.temp}{unit ? "°C" : "°F"}
                    </div>
                    <div>
                        High <br /> {mainData[2].main.temp_max}{unit ? "°C" : "°F"}
                    </div>
                    <div>
                        Low <br /> {mainData[2].main.temp_min}{unit ? "°C" : "°F"}
                    </div>
                </div>
                <div className='five-day'>
                    <div>
                        {dayNames[new Date(dates[3]).getDay()]} <br />
                        {mainData[3].main.temp}{unit ? "°C" : "°F"}
                    </div>
                    <div>
                        High <br /> {mainData[3].main.temp_max}{unit ? "°C" : "°F"}
                    </div>
                    <div>
                        Low <br /> {mainData[3].main.temp_min}{unit ? "°C" : "°F"}
                    </div>
                </div>
                <div className='five-day'>
                    <div>
                        {dayNames[new Date(dates[4]).getDay()]} <br />
                        {mainData[4].main.temp}{unit ? "°C" : "°F"}
                    </div>
                    <div>
                        High <br /> {mainData[4].main.temp_max}{unit ? "°C" : "°F"}
                    </div>
                    <div>
                        Low <br /> {mainData[4].main.temp_min}{unit ? "°C" : "°F"}
                    </div>
                </div>
            </div>
        </>
    )
}