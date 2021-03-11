import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TableData from "./components/TableData";
import axios from "axios";


function App () {
  // Variable declaration
  const [employees, setEmployees] = useState([]); 

  const [searchResult, setSearchResult] = useState("");

  const searchedEmployees = employees.filter((e) => {

    if (e.name.first.toLowerCase().includes(searchResult.toLowerCase())) {
      return true;
    }
    else if (e.name.last.toLowerCase().includes(searchResult.toLowerCase())) {
      return true;
    }
    else{
      return false
    }    
  })

  useEffect(() => {      
    // API request for a user with a given ID  
    axios.get('https://randomuser.me/api/?results=50&nat=us')
    .then((res)=> {
      console.log(res.data.results)
        setEmployees(res.data.results)
    })
    .catch((err)=> {
        console.log(err)

    })

 }, []);

  return(
    <div className="App">
      
      <Header />
      <SearchBar list={setSearchResult}  />      
      <TableData list={searchedEmployees} />
      
    </div>  
  );
     
  
}

export default App;


// setSearchResult={setSearchResult}  
// searchedEmployees={searchedEmployees}