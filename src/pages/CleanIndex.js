import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import AlternClean from '../components/AlternClean';

const CleanIndex = (props) => {
    const [userInput, setUserInput] = useState('');
    

    const handleChange = (e) => {
        setUserInput(e.target.value);
        console.log(userInput)
    }


  /////// LOADING FUNCTION TO DISPLAY JUST THE CHEMICAL NAMES ///////
  const loaded = () => {
    return props.clean.filter((chem) => {
        if(userInput ===''){
            return chem
        } else if(chem.chemical.toLowerCase().includes(userInput.toLowerCase())){
            return chem
        }
    }).map((chem) => {
        return (
        <div key={chem._id} className="chemical">
            <Link to={`/clean/${chem._id}`}>
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
    <h1 id="Quote">"Change before you have to." -Jack Welch</h1>
    <div id="Page-container">
    <section id="chemicalss">
    <h1 id="chemm">Commonly Found Chemicals in Cleaning Products</h1>
    <input className="search" type="text" placeholder="Search . . ." onChange={handleChange}/>
    {props.clean ? loaded() : loading()}
    </section>
    <section id="space"></section>
    
    </div>
</div>
)
}

export default CleanIndex;