import React from 'react'

const WeatherBox = ( {weather} ) => {
  return (
    <div className="container-information">
      <div> { weather?.name } </div>
      <div>{ weather?.main.temp } 도 / 240 도</div>
      <div>{ weather?.weather[0].description }</div>
    </div>
  )
}

export default WeatherBox;