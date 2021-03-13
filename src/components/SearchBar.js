import React from "react";

// Search function
function SearchBar(props) {    

    return(
        <form className="container" >
            <div >
                <input 
                    onChange ={props.onSearchChange}
                    // value={props.searchResult}
                    type="text"
                    placeholder="Search by name"
                    name="employee"
                    size="40" 
                          
                />
                {/* <button onClick={(e) => props.setSearchResult(e.target.value)} className="btn btn-dark" >Click here</button> */}
                <button onClick={props.onSearchChange} className="btn btn-dark" >Click here</button>
            </div>

        </form>
        

    )
    

}

export default SearchBar;