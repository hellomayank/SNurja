import React from 'react'

 const SolarStreet = () => {
    return (
        <>  
        <div className="MainContent" style={{backgroundImage:`url("/images/productbg.jpg")`,backgroundSize:"100% 100%"}}>
            <h2 className="Product_Header">Solar Street Light Solutions</h2>
            <div className="Products_Details">
            <img src="/images/solar street light.jpeg" alt="img_media"/>
            <p>Solar street lights are effective and efficient light sources in which power is fed with the help of Photo-voltaic Panels. They are generally mounted on the lighting structure. There is a Rechargeable battery, which is charged by photo voltaic panels. Then the charge of that battery is used to powers a fluorescent or Led Lamp during the night. There have sensors, through them solar panels turn on and turn off automatically by sensing outdoor light with the help of light source. They are designed to work at night.</p>
            </div>
            <div class="container">
                    <div class="row app-brief">
                        <div class="col-sm-7">
                            <img class="Product_Img" data-animation="fade-from-left" data-delay="250"  src="/images/ruralareaspanel.jpg"  alt="img_media"></img>
                        </div>

                        <div class="col-sm-5">
                            <div class="horizontal-break left"></div>

                            <div class="v-spacer col-sm-12 v-height-small"></div>

                            <ul class="v-list-v23">
                                <li class="v-animation" data-animation="fade-from-right" data-delay="150" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">The Working Principle of Solar Street Light is very simple.</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="300" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Photo voltaic solar cells convert the radiation of sun light into electrical energy.</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="450" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">This conversion takes place by the use of the semiconductor material of the device.</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="600" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">This process of energy conversion is generally called the “Photo voltaic effect”.</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="750" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Then charge and discharge controller is used to detect movement of the voltage value.</span></li> 
                            </ul>
                        </div>
                    </div>
            </div>
            </div>
        </>
    )
}

export default SolarStreet;