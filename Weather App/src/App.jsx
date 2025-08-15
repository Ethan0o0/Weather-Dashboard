import './App.css'
import { Head, Middle, Bottom } from './components.jsx'
import { useQuery } from '@tanstack/react-query';

//pass the correct data as props into each section
function App() {


  const city = "minneapolis";
  const API_KEY = "3462feed519534b9a4777633611d6af2"

  const {data: weatherdata, isLoading: weatherLoading, error: weatherError} = useQuery({
    queryFn: () => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`).then(
      (res) => res.json()
    ),
    queryKey: ['weatherdata'],
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

  // console.log(weatherdata.name);

  //TODO
  //2. Display the data correctly
  //3. Implement current time and location dynamic results
  //4. Implement searching feature
  //5. Celsius -> Farenheight button vice versa
  //6. Do styling and loading screen/error screen
  //7. Light and Dark Mode
  //8. Deploy


  return (
    <>
      <Head />
      <Middle 
        temp={weatherdata.main.temp}
        humidity={weatherdata.main.humidity}
        visibility={weatherdata.visibility}
        wind={weatherdata.wind.speed}
      />
      <Bottom />
    </>
  )
}



export default App;