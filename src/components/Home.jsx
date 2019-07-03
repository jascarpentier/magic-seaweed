import React from 'react';
import Blog from './Blog';
import AllWeather from './AllWeather';


class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="hero-container" >
          <h5 className="highlight"> What's the weather like to climb today in the Laurentians?</h5>
          <input className='weatherButton' type="button" value="Get Weather" onClick={this.props.handleSubmit} />
          <div id="hero-photo" />
        </div>

        <AllWeather
          temp={this.props.temp} />
        <div className='homepage'>
          <Blog />

        </div>
        <>
          <h3>Spotlight Climbs</h3>
          <section id="spotlight">

            <div className="spotlightClimbs" >
              <img className='spotlightimg' src="https://i.imgur.com/OwtkGPg.jpg" alt="sceptre" />
              <h3>Sceptre</h3>
              <p>A clean, arching, finger crack. Followed by a slabby traverse left, and then up right the final short crack.
</p>
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
              <p>Sweet crack, that just loves to eat pro and can easily get lay'ed back. </p>
              <button className="spotButtons">Read now</button>
            </div>
          </section>

        </>

      </div >


    )
  }
}

export default Home;