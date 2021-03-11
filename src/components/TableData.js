import React from "react";

function TableData(props) {
    return(
        <table class="table table-striped rounded" >
            <thead>
                <tr>
                    
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(e=>{
                    return(
                    <>
                        <tr key= {e.email}>
                            {/* <th scope="row">1</th> */}
                            <td>{e.name.first}</td>
                            <td>{e.name.last}</td>
                            <td>{e.email}</td>
                            <td>{e.gender}</td>
                        </tr>
                        {/* <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>jthornton@me.com</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>Bird</td>
                            <td>lbird@me.com</td>
                        </tr> */}
                    </>
                    
                )})}
                
            </tbody>
        </table>

    )
    
}

export default TableData;