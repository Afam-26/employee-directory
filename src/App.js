import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TableData from "./components/TableData";
import axios from "axios";


function App () {
  // Variable declaration
  const [employees, setEmployees] = useState([]); 

  const [searchResult, setSearchResult] = useState("");

  // Filter search function
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

 const onSearchChange = e => {
  e.preventDefault();
   setSearchResult(e.target.value)
   console.log(e.target.value)
 }

 const sortByLastName = (e) => {
  e.preventDefault()
  const sortedList = searchedEmployees.sort(((a, b) =>  a["name"].last > b["name"].last ? 1 : -1));
  console.log('log: sortedList ', sortedList);
  setEmployees(sortedList)
}

  return(
    <div className="App">
      
      <Header />
      <SearchBar onSearchChange={onSearchChange}  />      
      <TableData list={searchedEmployees} sortByLastName={sortByLastName} />
      
    </div>  
  );
     
  
}

export default App;


