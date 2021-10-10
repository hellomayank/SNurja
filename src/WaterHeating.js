import React from 'react'
import './Products.css';
 const WaterHeating = () => {
    return (
        <>
             <div className="MainContent" style={{backgroundImage:`url("/images/productbg.jpg")`,backgroundSize:"100% 100%"}}>
            <h2 className="Product_Header">Solar Water Heating Solutions</h2>
            <div className="Products_Details">
            <img src="/images/9.JPG" alt="img_media"/>
          <p>The solar water heaters have various designs, while they all consist of collector and storage tank. The collector in solar water heater is used to collect the radiation from sunlight to heat the water. The insulated storage tank is used to store the water for later use. Solar water heaters are typically described according to the types of collector and the circulation system. Different types of solar water heaters have disparate ways to work. The solar water heater has an array of solar collectors to collect the energy from sunlight, the collectors are connected to each other. The tank is located on the collectors to store the water. During the day time, the water was heated. Under the principle of gravity (the density of hot water is lower than that of cold water), the cold water is heated circularly. The hot water will go up to tank for later use</p>
            </div>
            <div class="container">
                    <div class="row app-brief">
                        <div class="col-sm-7">
                            <img class="Product_Img" data-animation="fade-from-left" data-delay="250"  src="/images/10.jpg"  alt="img_media"></img>
                        </div>

                        <div class="col-sm-5">
                            <div class="horizontal-break left"></div>

                            <div class="v-spacer col-sm-12 v-height-small"></div>

                            <ul class="v-list-v23">
                            <h3>There are two type of solar water heaters</h3>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="150" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">FPC (Flat Plate Collector Type)</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="300" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">ETC (Evacuated Tube Collector Type)</span></li>
                            </ul>
                        </div>
                    </div>
            </div>
            </div>
        </>
    )
}
export default WaterHeating;