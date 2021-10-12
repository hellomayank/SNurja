import './Banner.css';
import Carousel from 'react-bootstrap/Carousel'
function Banner(){
return (
    <>
        <div className="banner" >
         <h3 style={{position:"absolute",zIndex:"999"}}>Join The Energy Efficiency Mission</h3> 
        <Carousel fade style={{width:"100%"}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/projectphoto/3.jpg"
      alt="First slide"
      style={{backgroundSize:"100% 100%",height:"520px"}}
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/projectphoto/PHOTO1.jpeg"
      alt="Second slide"
      style={{backgroundSize:"100% 100%",height:"520px"}}
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/projectphoto/2.jpg"
      alt="Third slide"
      style={{backgroundSize:"100% 100%",height:"520px"}}
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/projectphoto/4.jpg"
      alt="Third slide"
      style={{backgroundSize:"100% 100%",height:"520px"}}
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/projectphoto/5.jpg"
      alt="Third slide"
      style={{backgroundSize:"100% 100%",height:"520px"}}
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/projectphoto/6.jpg"
      alt="Third slide"
      style={{backgroundSize:"100% 100%",height:"520px"}}
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/projectphoto/7.jpg"
      alt="Third slide"
      style={{backgroundSize:"100% 100%",height:"520px"}}
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/projectphoto/8.jpg"
      alt="Third slide"
      style={{backgroundSize:"100% 100%",height:"520px"}}
    />

  </Carousel.Item>
</Carousel>
        </div>
        <div className="clients col-12" >
            <div className="card-main">
              <h1>Renewable Energy Company in India</h1>
            </div>
            <div className="card-1" style={{backgroundImage:`url("/images/solarpanelhome_card.jpeg") `}}>
                <h2>150+</h2>
                <p>rooftop solar projects</p>
            </div>
            <div className="card-1" style={{backgroundImage:`url("/images/corporateclients.jpg")`}}>
                <h2>50+</h2>
                <p>Corporate Clients</p>
            </div>
            <div className="card-1" style={{backgroundImage:`url("/images/solarlight.jpeg")`}}>
                <h2>100+</h2>
                <p>Solar Street Light projects</p>
            </div>
        </div>
        <div className="content_Main">
        <div>
               <img src="/images/Banner_content_1.jpg"  className="m-auto" alt="Banner_Content_Image"/>
        </div>

               <div class="card-2">
            <h2>About Us</h2>
          <p>
          Our company is an end-to-end customer oriented alternative energy company that is centered on designing, procurement and installation of Solar and Energy efficient products and solutions as per specification and requirement of customers. Apart from this we also believe in best after sales services and support.
          </p>
          </div>
        </div>
      

    </>
);
}
export default Banner;