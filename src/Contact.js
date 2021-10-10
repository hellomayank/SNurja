import React from 'react'
import './contact.css';
export const Contact = () => {
    return (
        <>
    <div id="contactForm" >
  <div class="contactImg">
    <img src="/images/contactFormImg.jpg" alt="contactFormImage"/>
  </div>
  <div class="container m-lg-auto" id="container">
      <br/><br/><br/><br/><br/>
      <h1 class=" text-center" id="cntct"> Contact Us</h1><br/><br/>
      <form action="https://formsubmit.co/skimmktg@gmail.com" method="POST">
      <div class="from-group">
          <label for="user">Your Name: </label>
          <input type="text" name="Name" id="user1" class="form-control"/>
      </div>
      <div class="from-group">
          <label for="user">Your Email: </label>
          <input type="email" name="Email" id="user2" class="form-control"/>
      </div>
      <div class="from-group">
          <label for="user">Your Mobile: </label>
          <input type="email" name="Phone" id="user3" class="form-control"/>
      </div>
      <div class="from-group">
          <label for="email">Message: </label>
          <input type="text" name="Message" id="user4" class="form-control"/>
      </div>
      <br/>
      <p class="text-center">Thank you for the time you spent with me . </p>
      <div class="sendbtn text-center">
          <button class="btn clickme" id="bn" type="submit">send</button>
      </div>
      </form><br/><br/>
    

  </div>


  <br/><br/><br/>
</div>
             
        </>
    )
}
export default Contact;