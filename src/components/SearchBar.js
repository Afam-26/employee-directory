import React  from "react";


function SearchBar(props) {
//     // Variable declaration
    
//     const [searchResult, setSearchResult] = useState("");
    
//    const searchedEmployees = props.employees((e) => {

//         if(e.name.first.toLowerCase().includes(searchResult.toLowerCase())) {
//             return true;
//         }
//         else if(e.name.last.toLowerCase().includes(searchResult.toLowerCase())) {
//             return true;
//         }



//         e.preventDefault();
//        const filteredList = props.list.filter(person => {
//            console.log(person)
//            return []
//        })
//        console.log(filteredList)
//        props.updated(filteredList)
//    })

    

  

    const handleInputChange = event => {
        
        props.setSearchResult(event.target.value);
    };

    return(
        <form className="container" onClick>
            <div >
                <input 
                    onChange ={handleInputChange}
                    value={props.searchResult}
                    type="text"
                    placeholder="Search by name"
                    name="employee"
                    size="40" 
                          
                />
                <button onClick={(e) => props.setSearchResult(e.target.value)} className="btn btn-dark" >Click here</button>
            </div>

        </form>
        

    )
    

}

export default SearchBar;