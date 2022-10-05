import React, {useState, useEffect} from 'react'

const AlternFood = (props) => {
    const [newForm, setNewForm] = useState({
        name: "",
        description: "",
        img: ""
    })

    const [foodAlt, setFoodAlt] = useState(null)

    const altURL = "https://dtox-backend.herokuapp.com/altfood/"

//////// NEEDS TO RECEIVE THE LIST OF ALTERNATIVES FROM THE API AS PROPS PASSED DOWN FROM THE SHOW PAGE.  THEN WE NEED TO MAP OVER THEM AND DISPLAY THEM BELOW THE FORM.//////////////

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
        setFoodAlt(data);
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
        return foodAlt.map((alt) => {
            return (
                <div key={alt._id} className="altDiv">
                    <h3>{alt.name}</h3>
                    <h6>{alt.description}</h6>
                    <img src={alt.img} alt={alt.name}/>
                    <button onClick={() => {deleteAlt(alt._id)}}>
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
    <section>
        <h2>You can keep track of them here:</h2>
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
            <input 
                type="submit"
                value="Create Alternative"
            />
        </form>
        { foodAlt ? loaded() : loading()}
    </section>
  )
}

export default AlternFood;