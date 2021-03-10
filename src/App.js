import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TableData from "./components/TableData";
// import API from "./utils/API";

function App () {
  return(
    <div className="App">     
      <TableData />
      <Header />
      <SearchBar />
      {/* <API /> */}
    </div>
  )   
  
}

export default App;
