import React from "react";
import "./ParallaxBanner.css"
import Navigation from "./Navigation";

export default function ParallaxBanner(props) {
  const navbar = <Navigation trans={true} />

  return (
    <div style={{height: "100vh"}}>
      <div className='bgimg-1'>
        {navbar}
        <div className="title center"> TESTS FOR YOU</div>

      </div>
      <div className='bgimg-2 flexbox-center'><p className="placeholder-text">Some Medical Placeholder 2</p></div>
      <div className='bgimg-3 flexbox-center'><p className="placeholder-text">Some Medical Placeholder 3</p></div>
    </div>  
  );
};