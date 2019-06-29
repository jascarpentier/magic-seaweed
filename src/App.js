import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import { fetchRoutes, fetchWeather } from './services/api-helper';
import AllRoutes from './components/AllRoutes';
import AllWeather from './components/AllWeather';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [],
      formData: {
        name: '',
        location: [
          '0 ', '',
        ],
        type: '',
        pitches: ''
      },
      weather: [],
      weatherData: {
        currentWeather: {
          summary: '',
        }
      }

    }
  }

  getRoutes = async () => {
    const route = await fetchRoutes();
    this.setState({
      routes: route.routes
    })
  }

  getWeather = async () => {
    const weathers = await fetchWeather();
    this.setState({
      weather: Object.values(weathers)
    })
    console.log(this.state.weather)
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    })
    )
  }

  handleChange = (e) => {
    const { currently, value } = e.target;
    this.setState((prevState) => ({
      weatherData: {
        ...prevState.weatherData,
        [currently]: value
      }
    })
    )
  }

  componentDidMount = async () => {
    await this.getRoutes();
  }

  componentWillMount = async () => {
    await this.getWeather();
  }

  render() {
    return (
      <div className="App" >
        <header>
          <h3>What's the weather like to climb today?</h3>
          <Link to='all-routes'>All</Link>
          <Link to='all-weather'>Weather</Link>
        </header>
        <div id='display'>
          <Route path='/all-routes' render={() => (
            <AllRoutes
              routes={this.state.routes}

            />)} />
          <Route path='/all-weather' render={() => (
            <AllWeather
              weather={this.state.weather}
            />)} />
        </div>
        <footer>
          <p></p>
        </footer>
      </div >
    );
  }
}

export default App;
