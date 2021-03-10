import React, { useState }  from "react";

function SearchBar() {
    const [employee, setEmployee] = useState();
    
    const searchBtn = e => {
        e.preventDefault();
    };   

    return(
        <form className="align-middle" >
            <div className="form-control">
                <input 
                    onChange ={searchBtn}
                    type="text"
                    placeholder="Search by name"
                    name="search"
                    size="40"        
                />
                <button class="btn btn-primary" type="submit">Click here</button>
            </div>

        </form>
        

    )
    

}

export default SearchBar;