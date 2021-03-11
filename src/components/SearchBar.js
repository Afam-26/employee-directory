import React, { useState, useEffect }  from "react";
import axios from "axios"

function SearchBar(props) {
    // Variable declaration
    
    const [result, setResult] = useState();
    
    // const searchBtn = e => {
    //     e.preventDefault();        
    // };

    // const EmpFilter = employee.filter((event)=>{
    //     if(event.First ==

    // })

  

    const handleInputChange = event => {
        event.preventDefault();
        setResult(event.target.value);
    };

    return(
        <form className="container" onClick>
            <div >
                <input 
                    onChange ={e => setResult(e.target.value)}
                    value={props.search}
                    type="text"
                    placeholder="Search by name"
                    name="employee"
                    size="40" 
                          
                />
                <button onClick={handleInputChange} class="btn btn-primary " type="submit">Click here</button>
            </div>

        </form>
        

    )
    

}

export default SearchBar;