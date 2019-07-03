import React from 'react';

class AllRoutes extends React.Component {
  render() {
    return (
      <div className='climbing'>
        {this.props.routes.map((route) => (

          <div key={route.id}>
            <div className='climbs'>
              <p> {route.name}</p>
              <img className='climbpageimg' src={route.imgSmall ? route.imgSmall : 'https://i.imgur.com/KUXF8XR.jpg'} alt='' />
              <p>location: {route.location[5] ? route.location[5] : <p>unknown</p>}</p>
              <p>Type of climb: {route.type}</p>
              <p>Number of pitches:{route.pitches ? route.pitches : <p>unknown</p>}</p>
              <p><a className='routelink' href={route.url}>Read more</a></p>
            </div>

          </div>
        ))}
      </div>
    )
  }
}

export default AllRoutes;