import React from 'react'
import './Products.css';
const CoolPaints = () => {
   
    return (
        <>  
        <div className="MainContent" style={{backgroundImage:`url("/images/productbg.jpg")`,backgroundSize:"100% 100%"}}>
            <h2 className="Product_Header">COOL PAINTS AND COATINGS</h2>
            <div className="Products_Details">
            <img src="/images/coolpaints.jpg" alt="img_media"/>
            <p>Heat Reflective Paint or Sun Reflective Paint with high SRI value and high Albedo coating and can be applied on all types of roofs. It is a sun reflective paint and aims to reduce the roof temperature. It is a thermal insulating roof coating and which minimises the solar heat coming to the roof. It is one of the very few green building products approved by both green building bodies in India i.e GRIHA and IGBC for high albedo coatings. As an Insulation Coating, Its ability to reflect or resist heat on all roof surfaces such as RCC, Concrete, Metallic, Asbestos, GI, Galvalume Sheets, Pre-Coated roof sheets and Poly-flex.
                Apart from heat reflective coating we also provide transparent heat reflective coating for glass panels also.These coatings increases the efficiency of air conditioning and reduces the power consumption.</p>
            </div>
            </div>
        </>
    )
}
export default CoolPaints;  