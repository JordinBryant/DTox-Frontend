import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import AlternFood from '../components/AlternFood';

const FoodIndex = (props) => {

    const [foodAlt, setFoodAlt] = useState(null)

    const altURL = "https://dtox-backend.herokuapp.com/altfood"
    
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

    const getAlt = async () => {
        const response = await fetch(altURL);
        const data = await response.json();
        setFoodAlt(data);
    }
    
    useEffect(() => {
        getAlt();
    }, [])



  return (
    <div>
        <h1>Chemicals Commonly Found in Foods</h1>
        <h3>Select a chemical below to see more!</h3>
        {props.food ? loaded() : loading()}
        <h1>Healthy Alternative Options</h1>
        <AlternFood foodAlt={foodAlt}/>

    </div>
  )
}

export default FoodIndex;