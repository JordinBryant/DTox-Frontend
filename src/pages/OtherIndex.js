import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import AlternOther from '../components/AlternOther';


const OtherIndex = (props) => {


 
 /////// LOADING FUNCTION TO DISPLAY JUST THE CHEMICAL NAMES ///////
 const loaded = () => {
  return props.other.map((chem) => {
      return (
      <div key={chem._id} className="chemical">
          <Link to={`/other/${chem._id}`}>
              <h4>{chem.chemical}</h4>
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
      <h1>Chemicals Commonly Found in Other Products</h1>
      <h3>Select a chemical below to see more!</h3>
      {props.other ? loaded() : loading()}
      <h1>Healthy Alternative Options</h1>
      <AlternOther />
  </div>
)
}



export default OtherIndex;
