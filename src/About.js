import React from 'react'
import './About.css'
 const About = () => {
    return (
        <>
          <div className="About_Us" style={{backgroundImage:`url("/images/aboutbg.jpeg")`}}>
          <div className="About_Us_I">
              <p>Our company is the result of the synergy of innovative ideas and commitment to quality 
              by a group of dedicated technocrats. Founded in 2005, it has growing rapidly over the last 
              few years with a diversified product range and with a clear focus on solar on grid & off grid power 
              plants, solar water heating systems , solar LED street lighting solution and solar pumping systems. 
              The emphasis on quality and dedicated after sale services has helped us to have good network 
              in north India. More important is the faith reposed by the customers in the entire range of products. 
              During the past few years, the company has gained vast experience in designing and installation of Solar 
              Power Plants, LED based Solar street Lights, Solar Home Lighting, Solar Water Heating Systems and energy 
              efficient LED lighting solutions. With a strong designing and dedicated after sale services we have 
              developed ourselves as a leading solution provider of solar energy systems and allied products to cater 
              to almost the complete range of customer requirements. The company has established a good network for its 
              solar products who also take up marketing and servicing of our different products. The company also takes 
              up projects to cater the specific requirement of customers.</p>
              </div>
             
          </div>  

          <div  id="contact">
    <h2 class="contact_center">Our Team</h2>
  
    <div class="container_about">
      <div class="team">
        <div class="member">
          <img src="/images/profile-1.jpeg" alt="member_image" id="contact_profile"/>
          <h3>Puneet Aggarwal</h3>
          <span>skimmktg@gmail.com</span>
          <p>149, E-BLOCK, SIRSA , HARYANA,  INDIA</p>
          <div class="btn">
            <a href="tel:+91-7015635972">Contact me</a>
          </div>
        </div>
        <div class="member">
          <img src="/images/profile-2.jpeg" alt="member_image" id="contact_profile"/>
          <h3>Raman Choudhary</h3>
          <span>ramanhisar@gmail.com</span>
          <p>GANDHI CHOWK, HISAR, HARYANA</p>
          <div class="btn">
            <a href="tel:+91-9416244342">Contact me</a>
          </div>
        </div>
        
      </div>
    </div>
  </div>

        </>
    )
}
export default About;
