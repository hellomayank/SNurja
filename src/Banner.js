import './Banner.css';
function Banner(){
return (
    <>
        <div className="banner" >
        <h3>Join The Energy Efficiency Mission</h3>
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
            <div className="card-1" style={{backgroundImage:`url("/images/solar street light.jpeg")`}}>
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
             Our company is an end-to-end customer oriented alternative energy company that is centered on marketing,trading and distribution of Solar and Energy efficient products and  solutions. 
          </p>
          </div>
        </div>
      

    </>
);
}
export default Banner;