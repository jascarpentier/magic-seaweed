import React from 'react';


class AllWeather extends React.Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        {
          this.props.weather && this.props.weather.map((weathers) => (

            <div key={weathers.id}>
              <p>{weathers.currentWeather}</p>

            </div>
          ))}
      </div>
    )
  }
}

export default AllWeather;