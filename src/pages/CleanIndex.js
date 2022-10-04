import React from 'react'
import { Link } from 'react-router-dom';
import Alternatives from '../components/Alternatives';

const CleanIndex = (props) => {

  /////// LOADING FUNCTION TO DISPLAY JUST THE CHEMICAL NAMES ///////
  const loaded = () => {
    return props.clean.map((chem) => {
        return (
        <div key={chem._id} className="chemical">
            <Link to={`/clean/${chem._id}`}>
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
    <h1>Chemicals Commonly Found in Cleaning Products</h1>
    <h3>Select a chemical below to see more!</h3>
    {props.clean ? loaded() : loading()}
    <h1>Healthy Alternative Options</h1>
    <Alternatives />

</div>
)
}

export default CleanIndex;