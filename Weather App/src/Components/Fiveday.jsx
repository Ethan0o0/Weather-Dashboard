
export function Fiveday({dates, dayNames}){
    return (
        <>
            <div className='Bottom'>
                <div className='time-icon'>
                    {dayNames[new Date(dates[0]).getDay()]}
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