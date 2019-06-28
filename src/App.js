import React from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
import { fetchRoutes } from './services/api-helper';
import AllRoutes from './components/AllRoutes';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      routes: [],
      name: '',
    }
  }

  getRoutes = async () => {
    const route = await fetchRoutes();
    this.setState({
      routeList: route
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      [name]: value
    })
    )
  }

  async componentDidMount() {
    const data = await fetchRoutes();
    this.setState({
      routes: data
    });
  }

  render() {
    return (
      <div className="App" >
        <header>
          <p>magic seaweed</p>
          <Link to='all-routes'>All</Link>
        </header>
        <div id='display'>
          <Route path='all-routes' render={() => (
            <AllRoutes
              routes={this.state.routes}
            />
          )} />
        </div>
      </div >
    );
  }
}

export default App;
