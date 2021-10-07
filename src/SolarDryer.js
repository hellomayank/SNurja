import React from 'react'
import './Products.css';
const SolarDryer = () => {
   
    return (
        <>  
        <div className="MainContent" style={{backgroundImage:`url("/images/productbg.jpg")`,backgroundSize:"100% 100%"}}>
            <h2 className="Product_Header">Solar Dryer Solutions</h2>
            <div className="Products_Details">
            <img src="/images/solardryer.jpeg" alt="img_media"/>
            <p>Solar energy is an alternative source of energy for drying especially fruits, 
            vegetables, agricultural grains and other kinds of material, such as wood. This 
            procedure is especially applicable in the regions where the intensity of solar 
            radiation is high and sunshine duration is long. It is estimated that in developing 
            countries there exist significant post‐harvest losses of agricultural products, 
            due to lack of other preservation means. Drying by solar energy is a rather economical 
            procedure for agricultural products, especially for medium to small amounts of products. 
            It is still used from domestic and small consumer for drying of crops, agricultural products
             and foodstuff, such as fruits, vegetables, aromatic herbs, wood, etc. contributing thus 
             significantly to the economy of small agricultural communities and farms</p>
            </div>
            <div class="container">
                    <div class="row app-brief">
                        <div class="col-sm-7">
                            <img class="Product_Img" data-animation="fade-from-left" data-delay="250"  src="/images/solardryer1.jpg"  alt="img_media"></img>
                        </div>

                        <div class="col-sm-5">
                            <div class="horizontal-break left"></div>

                            <div class="v-spacer col-sm-12 v-height-small"> 
                            <h2>
                                Heat Pump Based Solar Dryer
                            </h2></div>
                            <p id="product_secondaary_text">Renewable energy dryer through dehydration-dehumidification of/for vegetables, 
                            fruits, agriculture products, herbs, seafood, wood & many such items for commercial 
                            & industrial sector. It is one of the most advanced methods of dehydrating, which 
                            dries products at low temperature and helps in preserving nutritional value as well 
                            as original taste/aroma/fragrance of the product. Dehydrated products can be stored for 
                            longer period of usage. If the products can be dehydrated at the point of origin, huge 
                            cost incurred on of cold storage can be saved. With added benefit of Low transportation 
                            cost due to light weight of dried products. We provide complete application based solution 
                            with correct system for each product.</p>
                            
                        </div>
                    </div>
            </div>
            </div>
        </>
    )
}
export default SolarDryer;  