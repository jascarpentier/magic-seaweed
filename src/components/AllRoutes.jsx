import React from 'react';


class AllRoutes extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.routes.map((route) => (

            <div key={route.id}>
              <p>name: {route.name}</p>
              <p>location: {route.location}</p>
              <p>Type of climb: {route.type}</p>
              <p>Number of pitches:{route.pitches}</p>
            </div>
          ))}
      </div>
    )
  }
}

export default AllRoutes;