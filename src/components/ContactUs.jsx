import React from 'react';

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <header className='contactheader'>


          <div className='herophotocontact'>
            <img className='photocontact' src='https://imgur.com/RCOhCN3.jpeg' alt='' />
          </div>
        </header>
        <main>
          <section id="contact-us">
            <div className="Contact-us">
              <h3>While we are pretty good at communicating by smoke signales, there are simpler and less time-consuming ways to get in touch with us.</h3>
              <label htmlFor="firsname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.." />

              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" name="lastname" placeholder="Your last name.." />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="Email" placeholder="Your email.." />

              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Your phone number.." />

              <label htmlFor="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

              <input type="submit" value="Submit" />
            </div>
          </section>
        </main>

      </div>





    )
  }

}

export default ContactUs;