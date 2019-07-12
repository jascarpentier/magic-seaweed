import React from 'react';


class Blog extends React.Component {
  render() {
    return (
      <>
        <h3 className='blog' >Blog</h3>
        <section id="blog" >

          <div id="blogArticles" >

            <img className='blogimg' src="https://i.imgur.com/VmiZyHH.jpg" alt="Vests and Banks" />
            <div className="blogArticles" />
            <h3 className='h3blog'>Patagonia Will Not Comment on the Finance Bro Vest</h3>
            <p className='Pblog'>Patagonia is moving on. Good on ’em. Eat it, shady elements of the fintech world. Story over, right?</p>
            <button className="blogButtons">Read now</button>
          </div>

          <div id="blogArticles" >
            <img className='blogimg' src="https://i.imgur.com/8eRdeIk.jpg" alt="yallow" />
            <div className="blogArticles" />
            <h3 className='h3blog'> It's Not OK to Poach Trails in Unstaffed National Parks</h3>
            <p className='Pblog'>Let’s characterize the current temperament as increasingly brazen with instances of outright criminality.</p>
            <button className="blogButtons">Read now</button>
          </div>
        </section>
      </>

    )
  }
}

export default Blog; 