import './Banner.css';
import Carousel from 'react-bootstrap/Carousel'
import { data } from "../src/CarouselAPI/Api"
function Banner() {
  return (
    <>
      <div className="banner" >
        <Carousel fade style={{ width: "100%" }}>
          {data.map((ele, idx) => {
            return <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={ele.imageUrl}
                alt="First slide"
                id="banner_image_car"
                style={{ backgroundSize: "100% 100%", height: "520px", width: "100%" }}
              />
            </Carousel.Item>
          })}
        </Carousel>
      </div>
      <div className="clients col-12" >
        <div className="card-main">
          <h1>Renewable Energy Company in India</h1>
        </div>
        <div className="card-1" style={{ backgroundImage: `url("/images/solarpanelhome_card.jpeg") ` }}>
          <h2>150+</h2>
          <p>rooftop solar projects</p>
        </div>
        <div className="card-1" style={{ backgroundImage: `url("/images/corporateclients.jpg")` }}>
          <h2>50+</h2>
          <p>Corporate Clients</p>
        </div>
        <div className="card-1" style={{ backgroundImage: `url("/images/solarlight.jpeg")` }}>
          <h2>100+</h2>
          <p>Solar Street Light projects</p>
        </div>
      </div>
      <div className="content_Main">
        <div>
          <img src="/images/Banner_content_1.jpg" className="m-auto" alt="Banner_Content_Image" />
        </div>

        <div class="card-2">
          <h2>About Us</h2>
          <p>
            Our company is an end-to-end customer oriented alternative energy company that is centered on designing, procurement and installation of Solar and Energy efficient products and solutions as per specification and requirement of customers. Apart from this we also believe in best after sales services and support.
          </p>
          <p>Email us: info@snurja.com</p>
        </div>
      </div>


    </>
  );
}
export default Banner;