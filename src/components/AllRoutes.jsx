import React from 'react';
// import { fetchRoutes } from './services/api-helper';
import { Link, Route } from 'react-router-dom';


class AllRoutes extends React.Component {



  render() {
    return (
      <div>
        {this.props.routes.map((route) => (
          <div key={route.id}>
            <p>{route.name}</p>

          </div>
        ))}
      </div>
    )
  }
}

export default AllRoutes;