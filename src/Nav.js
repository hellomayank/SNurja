import React from 'react';
import './Nav.css';
import Home from './Home';
import  Contact  from './Contact';
import  Invertor  from './Invertor';
import  Media  from './Media';
import  HeatPump  from './HeatPump';
import  WaterHeating  from './WaterHeating';
import  GridPanels from './GridPanels';
import  SolarDryer  from './SolarDryer';
import  CoolPaints  from './CoolPaints';
import  PoolWaterHeating  from './PoolWaterHeating';
import  SolarStreet  from './SolarStreet';
import  About  from './About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function Nav() {
      return (
        <Router>
        <>
        <nav className="navbar navbar-expand-sm position-sticky navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Enjoy Free energy from sun</a>
          <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/media">Media</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false" >
                  Services
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/heatpump">Heat Pump</a></li>
                  <li><a className="dropdown-item" href="/solardryer">Solar Dryers</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/gridinvertor">Ongrid and Off Grid Panels</a></li>
                  <li><a className="dropdown-item" href="/waterHeating">Solar Water Heater</a></li>
                  <li><a className="dropdown-item" href="/poolheating">Pool Water Heating</a></li>
                  <li><a className="dropdown-item" href="/solarlight">Solar Street Lights</a></li>
                  <li><a className="dropdown-item" href="/coolpaints">Cool Paints</a></li>
                </ul>
              </li>
              
            </ul>
            
          </div>
        </div>
      </nav>
  
      <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/invertor">
            <Invertor />
          </Route>
          <Route exact path="/media">
            <Media />
          </Route>
          <Route exact path="/heatpump">
            <HeatPump />
          </Route>
          <Route exact path="/waterHeating">
            <WaterHeating />
          </Route>
          <Route exact path="/solardryer">
            <SolarDryer />
          </Route>
          <Route exact path="/gridinvertor">
            <GridPanels />
          </Route>
          <Route exact path="/poolheating">
            <PoolWaterHeating />
          </Route>
          <Route exact path="/coolpaints">
            <CoolPaints />
          </Route>
          <Route exact path="/solarlight">
            <SolarStreet />
          </Route>
        </Switch>
      </>
    </Router>
    );
  
    }
  export default Nav;