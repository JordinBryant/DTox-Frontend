import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import AlternFood from '../components/AlternFood';

const FoodIndex = (props) => {
    const [userInput, setUserInput] = useState('');
    

const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(userInput)
}

// const handleSubmit = (e) => {
//     e.preventDefault();
//     props.food.map(chem => {
//         if(userInput === chem.chemical){
//             props.setFood([chem])
//         } 

        
//     })
// }
    


    
/////// LOADING FUNCTION TO DISPLAY JUST THE CHEMICAL NAMES ///////

    const loaded = () => {
        return props.food.filter((chem) => {
            if(userInput ===''){
                return chem
            } else if(chem.chemical.toLowerCase().includes(userInput.toLowerCase())){
                return chem
            }
        }).map((chem) => {
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




    return (
        <div>
            <h1 id="Quote">"The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking." -Albert Einstein</h1>
            {/* <form onSubmit={handleSubmit}>
                <label for="search">Search Chemicals</label>
                <input id="search" type="text" onChange={handleChange}/>
                <input type="submit" value="Search"/>
            </form> */}
            <div id="Page-container">
            <section id="chemicalss">
                <h1 id="chemm">Commonly Found Chemicals in Food</h1>
                <input className="search" type="text" placeholder="Search . . ." onChange={handleChange}/>
                {props.food ? loaded() : loading()}
                
            </section>
            <section id="space"></section>
            
            </div>
        </div>
    )

}

export default FoodIndex;