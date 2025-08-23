import './App.css'
import './Components.css'
import './Slider.css'
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import { Current } from './Pages/Current.jsx';
import { Forecast } from './Pages/Forecast.jsx';
import { Head } from './Components/Head.jsx';

//pass the correct data as props into each section
function App() {

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', {timeStyle: 'short'}));
    }, 1000);

    return () => {
      clearInterval(interval);
    }
    
  }, []);

  const [unit, setUnit] = useState(true);

  const [apiUnit, setApiUnit] = useState("imperial");

  function unitSwitch(event){
    // console.log(unit);
    setUnit(event.target.checked)
    // console.log(apiUnit);
  }

  useEffect(() => {
    if (unit) {
      setApiUnit("metric");
    }
    else {
      setApiUnit("imperial");
    }
    console.log(apiUnit);
  }, [unit])


  //API FETCHING AND HANDLING
  const city = "minneapolis";
  const API_KEY = "3462feed519534b9a4777633611d6af2"

  const {data: weatherdata, isLoading: weatherLoading, error: weatherError} = useQuery({
    queryFn: () => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${apiUnit}`).then(
      (res) => res.json()
    ),
    queryKey: ['weatherdata', apiUnit],
  });

  const {data: forecastdata, isLoading: forecastLoading, error: forecastError} = useQuery({
    queryFn: () => fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`).then(
      (res) => res.json()
    ),
    queryKey: ['forecastdata'],
  });

  if (weatherLoading || forecastLoading){
    return <h2>Loading...</h2>;
  }

  if (weatherError || forecastError) {
    return <div className="error">Error: error fetching</div>
  }

  //API ENDING

  //TODO
  //1. Route the pages correctly by using route
  //2. Display the data correctly
  //3. Implement current time and location dynamic results
  //4. Implement searching feature
  //6. Do styling and loading screen/error screen
  //7. Light and Dark Mode
  //8. Deploy

  const dates = []; //storing the dates in an array so that we can use it later
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // dayNames[new Date(dates[0]).getDay()]

  function calcTime(){

    const seenDates = new Set();
    const desiredTime = "03:00:00";
    const filteredForecast = [];
    
    forecastdata.list.forEach(item => {
      const timeText = item.dt_txt;
      const day = timeText.split(" ")[0];
      const time = timeText.split(" ")[1];
      if (!seenDates.has(day) && time === desiredTime){
        seenDates.add(day);
        filteredForecast.push(item);
        dates.push(day);
      }
    })

    return filteredForecast;
  }

  const testData = calcTime();
  // console.log(dates[0]);
  // console.log(new Date(dates[0]));
  // console.log(testData);
  //FIX THIS FIRST


  return (
    <Router>
      <Routes>
        <Route element={<Head 
          time={currentTime}
          checked={unit}
          change={unitSwitch}
        />}>
          <Route path='/' element={<Current 
            temp={weatherdata.main.temp}
            humidity={weatherdata.main.humidity}
            visibility={weatherdata.visibility}
            wind={weatherdata.wind.speed}
            unit={unit}
          />}/>
          <Route path='/forecast-5-day' element={<Forecast 
            dates={dates}
            dayNames={dayNames}
          />}/>
        </Route>
      </Routes>
    </Router>
  )
}



export default App;