import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import AlternOther from '../components/AlternOther';


const OtherIndex = (props) => {

    const [otherAlt, setOtherAlt] = useState(null)

    const altURL = "https://dtox-backend.herokuapp.com/altother"
 
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

const getAlt = async () => {
    const response = await fetch(altURL);
    const data = await response.json();
    setOtherAlt(data);
}

useEffect(() => {
    getAlt();
}, [])


return (
  <div>
      <h1>Chemicals Commonly Found in Other Products</h1>
      <h3>Select a chemical below to see more!</h3>
      {props.other ? loaded() : loading()}
      <h1>Healthy Alternative Options</h1>
      <AlternOther otherAlt={otherAlt}/>
  </div>
)
}



export default OtherIndex;
