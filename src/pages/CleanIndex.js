import React from 'react'

const CleanIndex = (props) => {
  /////// LOADING FUNCTION TO DISPLAY JUST THE CHEMICAL NAMES ///////
  const loaded = () => {
    return props.clean.map((chem) => {
        return <div key={chem._id} className="chemical">
            <h4>{chem.chemical}</h4>
        </div>
    })
}

const loading = () => {
    return <h1>Loading . . .</h1>
}


return (
<div>
    <h1>Chemicals Commonly Found in Cleaning Products</h1>
    <h3>Select a chemical below to see a more!</h3>
    {/* ///////// ternary statement to load the list ///////////*/}

</div>
)
}

export default CleanIndex;