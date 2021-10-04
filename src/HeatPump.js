import React from 'react'
import './Products.css';
const HeatPump = () => {
   
    return (
        <>  
        <div className="MainContent" style={{backgroundImage:`url("/images/productbg.jpg")`,backgroundSize:"100% 100%"}}>
            <h2 className="Product_Header">Heat Pump Solutions</h2>
            <div className="Products_Details">
            <img src="/images/7.jpeg" alt="img_media"/>
            <p>Air Source Heat Pump Water Heating System (ASHPWH) is a revolutionary 
            innovative product which gives 24/7 hot water. ASHPWH works with a world 
            wide proven high performance & power saving technology and regarded as 4th 
            generation water heater. It is unique because, approximately 75 % of total 
            heat energy generated is absorbed from the surrounding ambient air and 25 % from electricity.</p>
            </div>
            <div class="container">
                    <div class="row app-brief">
                        <div class="col-sm-7">
                            <img class="Product_Img" data-animation="fade-from-left" data-delay="250"  src="/images/6.jpeg"  alt="img_media"></img>
                        </div>

                        <div class="col-sm-5">
                            <div class="horizontal-break left"></div>

                            <div class="v-spacer col-sm-12 v-height-small"></div>

                            <ul class="v-list-v23">
                                <li class="v-animation" data-animation="fade-from-right" data-delay="150" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Heat from Ambient Air is absorbed by evaporator coils containing refrigerant at low pressure an low temperature.</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="300" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Due to heat absorption the refrigerant boils & vaporizes.</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="450" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">After passing through compressor, the refrigerant attains high temperature & high pressure and enters into condenser with heat exchanger.</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="600" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">While condensing the refrigerant transfers heat to the water in the Heat Exchanger and thus loses its temperature.</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="750" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">The refrigerant further loses its pressure & temperature while passing through expansion valve and enters evaporator chamber. Thus the cycle repeats.</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="900" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">The COP (Coefficient of Performance) is between 3.5 to 4 which means that, it will produce 3.5 to 4 units of heat energy by consuming 1 units of electricity.</span></li>
                            </ul>
                        </div>
                    </div>
            </div>
            </div>
        </>
    )
}
export default HeatPump;  