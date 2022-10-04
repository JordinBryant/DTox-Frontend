import React, {useState} from 'react'

const AlternClean = (props) => {
    const [newForm, setNewForm] = useState({
        name: "",
        description: "",
        img: ""
    })

//////// NEEDS TO RECEIVE THE LIST OF ALTERNATIVES FROM THE API AS PROPS PASSED DOWN FROM THE SHOW PAGE.  THEN WE NEED TO MAP OVER THEM AND DISPLAY THEM BELOW THE FORM.//////////////
    

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        ////// call a function that will be defined in the index pages to update state in the index pages to add/post this new alternative to the alternatives database. The index page will also render the list of alternatives.
        setNewForm({
            name: "",
            description: "",
            img: ""
        })
    }

    //////// Loaded function ///////
    const loaded = () => {
        return props.cleanAlt.map((alt) => {
            return (
                <div className="altDiv">
                    <h3>{alt.name}</h3>
                    <h6>{alt.description}</h6>
                    <img src={alt.img} alt={alt.name}/>
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
                type="submit"
                value="Create Alternative"
            />
        </form>
        { props.cleanAlt ? loaded() : loading()}
    </section>
  )
}

export default AlternClean;