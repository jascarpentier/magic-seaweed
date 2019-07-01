import React from 'react';
import Blog from './Blog';
import Footer from './Footer';
import AllWeather from './AllWeather';


class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="hero-container" />
        <h5 className="highlight"> What's the weather like to climb today?</h5>
        <div id="hero-photo" />

        <>
          <section id="spotlight" />
          <h2>Spotlight Climbs</h2>
          <div id="spotlightClimb" />
          <div className="spotlightClimbs" >
            <img className='spotlightimg' src="https://i.imgur.com/OwtkGPg.jpg" alt="sceptre" />
            <h3>Sceptre</h3>
            <p>A clean, arching, finger crack. Followed by a slabby traverse left, and then up right the final short crack. Bolted Anchor
Rappel easily done with a 60 metre rope</p>
            <button className="spotButtons">Read now</button>
          </div>

          <div className="spotlightClimbs" >
            <img className='spotlightimg' src="https://i.imgur.com/Mex7fTF.jpg" alt="weir" />
            <h3>Le Monde à l'envers </h3>
            <p>Trad climbing to start, then transitions to overhanging sport.</p>
            <button className="spotButtons">Read now</button>
          </div>

          <div className="spotlightClimbs" >
            <img className='spotlightimg' src="https://i.imgur.com/pkdZMlN.jpg" alt="yallow" />
            <h3>M&M</h3>
            <p>Sweet crack, that just loves to eat pro and can easily get lay'ed back. Watch your feet if it's been raining recently, the crack and face can get greasy but dry fairly quickly in the sun.</p>
            <button className="spotButtons">Read now</button>
          </div>
        </>

      </div >

    )
  }
}

export default Home;