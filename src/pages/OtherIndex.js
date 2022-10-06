import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import AlternOther from '../components/AlternOther';


const OtherIndex = (props) => {



  /////// LOADING FUNCTION TO DISPLAY JUST THE CHEMICAL NAMES ///////
  const loaded = () => {
    return props.other.map((chem) => {
      return (
        <div key={chem._id} className="chemical">
          <Link to={`/other/${chem._id}`}>
            <h4 id="allchemicals">{chem.chemical}</h4>
          </Link>
        </div>
      )
    })
  }
  const loading = () => {
    return <h1>Loading . . .</h1>
  }




  return (
    <div>
      <h1 id="Quote">"I alone cannot change the world, but I can cast a stone across the waters to create many ripples." -Mother Teresa</h1>
      <div id="Page-container">
        <section id="chemicalss">
          <h1 id="chemm">Commonly Found Chemicals in Other Products</h1>
          {props.other ? loaded() : loading()}
        </section>
        <section id="space"></section>
        <section id="Altsection">
          <h1 id="AltTitle">Healthy Alternative Options</h1>
          <AlternOther />
        </section>
      </div>
    </div>
  )
}



export default OtherIndex;
