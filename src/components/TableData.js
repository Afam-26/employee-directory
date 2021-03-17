import React from "react";


function TableData(props) {
    return(
        <table className="table table-striped rounded" >
            <thead>
                <tr style={{color: "black", fontFamily: "Lucida Console", fontWeight: "bolder", fontSize: "2rem"}}>
                    <th scope="col">Picture</th>
                    <th scope="col">First</th>
                    <th scope="col" className="sort" onClick={(e) => props.sortByLastName(e)}>Last ⬇️</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                </tr>
            </thead>
   
            <tbody>
                {props.list.map((e)=>{
                    return(                  
                        <tr key={e.email} style={{ color: "black", fontFamily: "Lucida Console", fontSize: "1.5rem" }}>
                            <td><img src={e.picture.thumbnail} alt="employee" /> </td>
                            <td>{e.name.first}</td>
                            <td>{e.name.last}</td>
                            <td>{e.email}</td>
                            <td>{e.gender}</td>
                        </tr>             
                                      
                )})}
                
            </tbody>
        </table>

    )
    
}

export default TableData;

// e => props.list = props.list.sort((function(a, b) {return a.name.last > b.name.last ? 1:-1;}))