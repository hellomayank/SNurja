import React from 'react'

 const PoolWaterHeating = () => {
    return (
        <>  
        <div className="MainContent" style={{backgroundImage:`url("/images/productbg.jpg")`,backgroundSize:"100% 100%"}}>
            <h2 className="Product_Header">Pool Water Heating Solutions</h2>
            <div className="Products_Details">
            <img src="/images/pool.jpg" alt="img_media"/>
            <p>You can significantly reduce swimming pool heating costs by installing a solar pool heater/ heat pumps. They're cost competitive with other source of heating, and they have very low annual operating costs in different climate conditions.Pool water is pumped through the filter and then through the solar collector/ heat pump, where it is heated before it is returned to the pool. Before providing solution we have to assess</p>
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
                                <li class="v-animation" data-animation="fade-from-right" data-delay="150" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Pool size</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="300" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Length of swimming season</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="450" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Average regional temperatures</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="600" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Desired pool temperature</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="750" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Site of system installation</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="900" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Distance of pool from system</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="900" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Water test report</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="900" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Indoor/ Outdoor location of pool</span></li>
                            </ul>
                        </div>
                    </div>
            </div>
            </div>
        </>
    )
}

export default PoolWaterHeating;