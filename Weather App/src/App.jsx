import './App.css'
import { Head, Middle, Bottom } from './components.jsx'
import { useQuery } from '@tanstack/react-query';

//pass the correct data as props into each section
function App() {


  const city = "minneapolis";
  const API_KEY = "3462feed519534b9a4777633611d6af2"

  const {data: weatherdata, isLoading, error} = useQuery({
    queryFn: () => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`).then(
      (res) => res.json()
    ),
    queryKey: ['weatherdata'],
  });

  if (isLoading){
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <div className="error">Error: error fetching</div>
  }

  // console.log(weatherdata.main.temp);


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