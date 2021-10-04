import React from 'react';
import './RadiusInvertor.css';
export const Invertor = () => {
    return (
        <>
            <div className="invertorBg" style={{backgroundImage:`url("/images/radiusInvertorbg.jpg")`}}></div>
            
            <div class="container">
                    <div class="row app-brief">
                        <div class="col-sm-7">
                            <img class="invertorImg" data-animation="fade-from-left" data-delay="250"  src="/images/radiusivertor.png"  alt="img_media"></img>
                        </div>

                        <div class="col-sm-5">
                            <p class="v-smash-text-large-2x pull-top">
                                <span>New <span class="orgcolor"> <img src="/images/Radius-Logo.svg" style={{height:"77px",marginTop:"-24px"}}  alt="img_media"/> </span>range of PV inverters</span>
                            </p>
                            <div class="horizontal-break left"></div>
                            <p class="v-lead">
                                    The RADIUS range of PV inverters represents the most advanced technology in the sector for controlling state-of-the-art industrial and civil PV plants. Maximum energy efficiency, long-term reliability, plant monitoring and high-level professional service are the cornerstones of the RADIUS range.                            </p>

                            <div class="v-spacer col-sm-12 v-height-small"></div>

                            <ul class="v-list-v2">
                                <li class="v-animation" data-animation="fade-from-right" data-delay="150" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Fan less inverter for natural cooling.</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="300" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Graphical LCD display</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="450" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">IP65 for outdoor mounting.</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="600" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">In-build memory to store energy data up to 10 years.</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="750" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">In-built string level monitoring for each string</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="900" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">In-built DC disconnection Switch </span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="1050" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Advanced 3-level IGBT switching. </span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="1200" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">In-built fuse protection for each positive and negative line <span class="shiftFeatures">of </span> each string.</span></li>
                                <li class="v-animation" data-animation="fade-from-right" data-delay="1350" style={{opacity: "1",right:"0px"}}><i class="fa fa-check orgcolor"></i><span class="v-lead">Full power upto 50 °C without any derating &amp; opration <span class="shiftFeatures">upto</span> 60 °C.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Invertor;