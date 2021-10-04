import './Banner.css';
function Banner(){
return (
    <>
        <div className="banner" style={{backgroundImage:`url("/images/solarpanel-2.jpg")`,backgroundSize: "cover"}}>
        <h3>Join The Solar Revolution with SNURJA</h3>
        </div>
        <div className="clients col-12" >
            <div className="card-main">
              <h1>Renewable Energy Company in India</h1>
            </div>
            <div className="card-1" style={{backgroundImage:`url("/images/solarpanelhome.jpg") `}}>
                <h2>150+</h2>
                <p>rooftop solar projects</p>
            </div>
            <div className="card-1" style={{backgroundImage:`url("/images/corporateclients.jpg")`}}>
                <h2>100+</h2>
                <p>Corporate Clients</p>
            </div>
            <div className="card-1" style={{backgroundImage:`url("/images/solar street light.jpg")`}}>
                <h2>100+</h2>
                <p>Solar Street Light projects</p>
            </div>
        </div>
        <div className="content_Main">

               <img src="/images/Banner_content_1.jpg"  className="m-auto" alt="Banner_Content_Image"/>
               <div class="card-2">
            <h2>Few Words About Us</h2>
          <p>
             Our company is an end-to-end customer oriented alternative energy company that is centered on marketing,trading and distribution of solar panels. 
          </p>
          </div>
        </div>
        <div className="content_Main2">
            <div className="card-2">
            <h2>Panel Installation</h2>
          <p>
             Our company is an end-to-end customer oriented alternative energy company that is centered on marketing,trading and distribution of solar panels. 
          </p>
          </div>
               <img src="/images/panelinstall.jpg" className="m-auto" alt="Banner_Content_Image"/>
            
        </div>
        <div className="content_Main">
      
         <img src="/images/solarpanelhome.jpg"   className="m-auto" alt="Banner_Content_Image"/>
     <div className="card-2">
      <h2>Rooftop Solar On and Off Grid</h2>
    <p>
       Our company is an end-to-end customer oriented alternative energy company that is centered on marketing,trading and distribution of solar panels. 
    </p>
    </div>
      </div>

    </>
);
}
export default Banner;