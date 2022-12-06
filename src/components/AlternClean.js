import React, {useState, useEffect} from 'react'

const AlternClean = (props) => {
    const [newForm, setNewForm] = useState({
        name: "",
        description: "",
        img: ""
    })

    const [cleanAlt, setCleanAlt] = useState(null)

    const altURL = "https://dtox-backend-2.herokuapp.com/altclean/"
    

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
        setCleanAlt(data);
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
    
    
    ////////////// FUNCTION TO UPDATE CLEANALT WITH USER INPUT //////////////
    // const updateAlt = async (alt, id) => {
    //     await fetch(altURL + id, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "Application/json",
    //         },
    //         body: JSON.stringify(alt)
    //     });
    //     getAlt();
    // }
    
    
    //console.log(cleanAlt);
    

    

    //////// Loaded function ///////
    const loaded = () => {
        return cleanAlt.map((alt) => {
            //console.log("image url", alt.img)
            return (
                <div key={alt._id} className="altDiv">
                    <h3 id="altname">{alt.name}</h3>
                    <h6 id="altdescription">{alt.description}</h6>
                    <img id="foodimg" src={alt.img} alt={alt.name}/>
                    <button id="deletebtn" onClick={() => {deleteAlt(alt._id)}}>
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
        { cleanAlt ? loaded() : loading()}
    </section>
  )
}

export default AlternClean;