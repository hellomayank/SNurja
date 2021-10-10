import React from 'react'
import './Products.css';
const GridInvetor = () => {
   
    return (
        <>  
        <div className="MainContent" style={{backgroundImage:`url("/images/productbg.jpg")`,backgroundSize:"100% 100%"}}>
            <h2 className="Product_Header">On Grid and Off Grid Solutions</h2>
            <div className="Products_Details">
            <img src="/images/ongridsoln.jpeg" alt="img_media"/>
            <p>On-grid or grid-tie solar systems are by far the most common and widely used by homes and businesses. These systems do not need batteries and use either solar inverters or micro-inverters and are connected to the public electricity grid. Any excess solar power that you generate is exported to the electricity grid and you get exchange benefit
Off grid/ hybrid solar systems has battery storage and are able to automatically isolate from the grid (known as islanding) and continue to supply some power during a blackout.
</p>
            </div>
          {/*   <div class="container">
                    <div class="row app-brief">
                        <div class="col-sm-7">
                            <img class="Product_Img" data-animation="fade-from-left" data-delay="250"  src="/images/6.jpeg"  alt="img_media"></img>
                        </div>

                    
                    </div>
            </div> */}
            </div>
        </>
    )
}
export default GridInvetor;  