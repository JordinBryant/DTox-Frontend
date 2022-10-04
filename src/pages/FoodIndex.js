import React from 'react'
import { Link } from "react-router-dom";
import Alternatives from '../components/Alternatives';

const FoodIndex = (props) => {
    
/////// LOADING FUNCTION TO DISPLAY JUST THE CHEMICAL NAMES ///////
    const loaded = () => {
        return props.food.map((chem) => {
            return (
            <div key={chem._id} className="chemical">
                <Link to={`/food/${chem._id}`}>
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
        <h1>Chemicals Commonly Found in Foods</h1>
        <h3>Select a chemical below to see more!</h3>
        {props.food ? loaded() : loading()}
        <h1>Healthy Alternative Options</h1>
    <Alternatives />

    </div>
  )
}

export default FoodIndex;