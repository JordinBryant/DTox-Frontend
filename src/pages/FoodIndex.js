import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import AlternFood from '../components/AlternFood';

const FoodIndex = (props) => {


    const [foodAlt, setFoodAlt] = useState(null)

    const altURL = "https://dtox-backend.herokuapp.com/altfood"

    /////// LOADING FUNCTION TO DISPLAY JUST THE CHEMICAL NAMES ///////

    
    
/////// LOADING FUNCTION TO DISPLAY JUST THE CHEMICAL NAMES ///////

    const loaded = () => {
        return props.food.map((chem) => {
            return (
                <div key={chem._id} className="chemical">
                    <Link to={`/food/${chem._id}`}>
                        <h4 id="allchemicals">{chem.chemical}</h4>
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
            <h1 id="Quote">"The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking." -Albert Einstein</h1>
            <div id="Page-container">
            <section id="chemicalss">
                <h1 id="chemm">Commonly Found Chemicals in Food</h1>
                {props.food ? loaded() : loading()}
            </section>
            <section id="space"></section>
            <section id="Altsection">
                <h1 id="AltTitle">Healthy Alternative Options</h1>
                <AlternFood foodAlt={foodAlt} />
            </section>
            </div>
        </div>
    )

}

export default FoodIndex;