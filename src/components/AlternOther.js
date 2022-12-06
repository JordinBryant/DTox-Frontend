import React, {useState, useEffect} from 'react'

const AlternOther = (props) => {
    const [newForm, setNewForm] = useState({
        name: "",
        description: "",
        img: ""
    })

    const [otherAlt, setOtherAlt] = useState(null)

    const altURL = "https://dtox-backend-2.herokuapp.com/altother/"

//////// NEEDS TO RECEIVE THE LIST OF ALTERNATIVES FROM THE API AS PROPS PASSED DOWN FROM THE SHOW PAGE.  THEN WE NEED TO MAP OVER THEM AND DISPLAY THEM BELOW THE FORM.//////////////
    

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        // if(!props.user) {
        //     alert('You must be logged in');
        //     return; //immediately exit the function!
        // }
        createAlt(newForm)
        setNewForm({
            name: "",
            description: "",
            img: ""
        })
    }

    const getAlt = async () => {
        const response = await fetch(altURL);
        const data = await response.json();
        setOtherAlt(data);
    }
    
    useEffect(() => {
        getAlt();
    }, [])

    ///////////// FUNCTION TO CREATE A NEW ALTERNATIVE //////////////
    const createAlt = async (alt) => {
        await fetch(altURL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
        
            body: JSON.stringify(alt)
        })
        
        getAlt()
      }

      ///////////// FUNCTION TO DELETE AN ALT ///////////////////
    const deleteAlt = async (id) => {
        
        await fetch(altURL + id, {
          method: "DELETE",
        })
        
        getAlt();
      }

    //////// Loaded function ///////
    const loaded = () => {
        return otherAlt.map((alt) => {
            return (
                <div key={alt._id} className="altDiv">
                    <h3 id="altname">{alt.name}</h3>
                    <h6 id="altdescription">{alt.description}</h6>
                    <img id="foodimg"src={alt.img} alt={alt.name}/>
                    <button id="deletebtn"onClick={() => {deleteAlt(alt._id)}}>
                        DELETE
                    </button>
                </div>
            )
        })
    }

    /////// Loading function ///////
    const loading = () => {
        return <h1>Loading...</h1>;
      };
    
  return (
    <section id="altsection">
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name"
                value={newForm.name}
                placeholder="name of alternative"
                onChange={handleChange}
            />
            <input 
                type="text"
                name="description"
                value={newForm.description}
                placeholder="description"
                onChange={handleChange}
            />
            <input 
                type="text"
                name="img"
                value={newForm.img}
                placeholder="image url"
                onChange={handleChange}
            />
            <input id="submitAlt"
                type="submit"
                value="Create Alternative"
            />
        </form>
        { otherAlt ? loaded() : loading()}
    </section>
  )
}

export default AlternOther;