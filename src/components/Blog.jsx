import React from 'react';


class Blog extends React.Component {
  render() {
    return (
      <>
        <section id="blog" />
        <h2>Blog</h2>
        <div id="blogArticles" />
        <div className="blogArticles" />
        <img className='blogimg' src="https://i.imgur.com/VmiZyHH.jpg" alt="Vests and Banks" />
        <h3>Patagonia Will Not Comment on the Finance Bro Vest</h3>
        <p>Patagonia is moving on. Good on ’em. Eat it, shady elements of the fintech world. Story over, right?</p>
        <button className="blogButtons">Read now</button>

        <div className="blogArticles" />
        <img className='blogimg' src="https://i.imgur.com/8eRdeIk.jpg" alt="yallow" />
        <h3>It's Not OK to Poach Trails in Unstaffed National Parks</h3>
        <p>Let’s characterize the current temperament as increasingly brazen with instances of outright criminality.</p>
        <button className="blogButtons">Read now</button>
      </>

    )
  }
}

export default Blog; 