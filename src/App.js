import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import { fetchRoutes, fetchWeather } from './services/api-helper';
import AllRoutes from './components/AllRoutes';
import AllWeather from './components/AllWeather';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Footer from './components/Footer';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [],
      formData: {
        name: '',
        imgSmall: '',
        location: [
          '',
        ],
        type: '',
        pitches: '',
        url: ''
      },
      temp: '',
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
      temp: weathers.main.temp
    })

  }

  handleRouteChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    })
    )
  }


  handleSubmit = (ev) => {
    ev.preventDefault();
    this.getWeather();
  }


  componentDidMount = async () => {
    // await this.getWeather();
    await this.getRoutes();
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
            <Route exact path='/' render={() =>
              <Home
                handleSubmit={this.handleSubmit}
                temp={this.state.temp}
                value={this.props.temp}
              />} />
            <Route path='/all-routes' render={() => (
              <AllRoutes
                routes={this.state.routes}
              />)} />
            <Route path='/contact-us' render={() => <ContactUs />} />
            <Route path='/all-weather' render={() => (
              <AllWeather
                temp={this.state.temp}
              />)} />

          </div>
        </main>
        <Footer />
      </div >
    );
  }
}

export default App;
