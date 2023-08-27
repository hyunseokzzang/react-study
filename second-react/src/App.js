import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false)
  const cities = ['paris', 'new york', 'london', 'tokyo'];
  
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition( (position) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;

      getWeatherByCurrentLocation(lat, lng);
    });
  }

  const getWeatherByCurrentLocation = async(lat, lng) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=124bccb40d043ec8dd0def5032f845ad&units=metric`;
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data)
    setLoading(false)

  }

  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=124bccb40d043ec8dd0def5032f845ad&units=metric`;
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();

    setWeather(data);

    setLoading(false)
  }

  useEffect(() => {
    if(city == '') {
      getCurrentLocation()
    } else {
      getWeatherByCity();
    }
  }, [city])
  
  return (
    <Fragment>
      { loading? (
        <div className="container">
          <ClipLoader
          color={ 'red' }
          loading={ loading }
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> 
        </div>
        ) : (
          <div className="container">
          <WeatherBox weather={ weather } />
          <WeatherButton cities={cities} setCity={setCity}/> 
          </div>
        )
      }
    </Fragment>
  );
}

export default App;
