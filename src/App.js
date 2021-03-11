import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TableData from "./components/TableData";
import axios from "axios";


function App () {
  const [employees, setEmployees] = useState([]);

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
      <SearchBar />
      <TableData list={employees}/>
      
    </div>  
  );
     
  
}

export default App;
