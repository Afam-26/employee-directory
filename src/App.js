import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import DataTable from "./components/DataTable";
// import API from "./utils/API";

function App () {
  return(
    <div className="App">     
      <DataTable />
      <Header />
      <SearchBar />
      {/* <API /> */}
    </div>
  )   
  
}

export default App;
