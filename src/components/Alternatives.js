import React, {useState} from 'react'

const Alternatives = (props) => {
    const [newForm, setNewForm] = useState({
        name: "",
        description: ""
    })

    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        ////// call a function that will be defined in the show pages to update state in the show pages to add/post this new alternative to the alternatives database. The show page will also render the list of alternatives.
        setNewForm({
            name: "",
            description: ""
        })
    }

    //////// Loaded function ///////

    /////// Loading function ///////
    
  return (
    <section>
        <h2>Do you know of healthy alternatives to this product?  You can keep track of them here:</h2>
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
        //// Here will be the ternary statement to display the loaded alternatives ///
    </section>
  )
}

export default Alternatives;