import React from 'react';
import './footer.css';
export const Footer = () => {
    return (
        <>
            <div className="footer_main">
                <div className="footer_content">
                <h2 className="footer_content_h2">Company</h2>
                    <a href="/">Home</a>
                    <a href="/contact">Contact Us</a>
                    <a href="/media">Media</a>
                    <a href="/about">About US</a>
                </div>
                <div className="footer_content">
                <h2 className="footer_content_h2">Products</h2>
                    <a href="/heatpump">Heat Pump</a>
                    <a href="/gridinvertor">Ongrid and Off Grid Panels</a>
                    <a href="/solardryer">Solar Dryer</a>
                    <a href="/waterHeating">Solar Water Heater</a>
                    <a href="/poolheating">Pool Water Heating</a>
                    <a href="/coolpaints">Cool Paints</a>
                </div>
                
                <div className="footer_content">
                <h2 className="footer_content_h2">Contact Info</h2>
                    <p>S K (INDIA) MARKETING,</p>
                    <p>149, E-BLOCK, SIRSA , HARYANA,  INDIA</p>
                    <p >skimmktg@gmail.com , radiusmktg@gmail.com </p>
                    <p>+91-9416047116</p>
                    <br/>
                    <p>NIRMAL ENTERPRISES, GANDHI CHOWK, HISAR, HARYANA</p>
                    <p>ramanhisar@gmail.com</p>
                    <p>+91-9416244342</p>
                </div>
            </div>
        </>
    )
}
export default Footer;