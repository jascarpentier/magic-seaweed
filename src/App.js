import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import { fetchRoutes, fetchWeather } from './services/api-helper';
import AllRoutes from './components/AllRoutes';

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
        currently: '',
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
      weather: we
    })
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

  componentDidMount = async () => {
    await this.getRoutes();
  }

  render() {
    return (
      <div className="App" >
        <header>
          <h3>What's the weather like to climb today?</h3>
          <Link to='all-routes'>All</Link>
        </header>
        <div id='display'>
          <Route path='/all-routes' render={() => (
            <AllRoutes
              routes={this.state.routes}
            />
          )} />
        </div>
        <footer>
          <p></p>
        </footer>
      </div >
    );
  }
}

export default App;
