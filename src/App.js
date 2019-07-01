import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import { fetchRoutes, fetchWeather } from './services/api-helper';
import AllRoutes from './components/AllRoutes';
import AllWeather from './components/AllWeather';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Blog from './components/Blog';
import Footer from './components/Footer';



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
          temperature: '',
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
    const { currentWeather, value } = e.target;
    this.setState((prevState) => ({
      weatherData: {
        ...prevState.weatherData,
        [currentWeather]: value
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
          <nav>
            <Link className='NavLinks' to='home'>Home</Link>
            <Link className='NavLinks' to='all-routes'>Climbs</Link>
            <Link className='NavLinks' to='contact-us'>Contact Us</Link>

          </nav>


        </header>
        <main>

          <div id='display'>
            <Route path='/home' render={() => <Home />} />
            <Route path='/all-routes' render={() => (
              <AllRoutes
                routes={this.state.routes}
              />)} />
            <Route path='/contact-us' render={() => <ContactUs />} />
            <Route path='/all-weather' render={() => (
              <AllWeather
                weather={this.state.weather}
              />)} />

          </div>
        </main>
        <footer>

        </footer>
      </div >
    );
  }
}

export default App;
