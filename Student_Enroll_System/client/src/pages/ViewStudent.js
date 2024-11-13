import React, { useState } from 'react';
import { Alert, Button, Table } from 'react-bootstrap';
import axios from 'axios';

function ViewStudent(){
    const [data,setData]=useState([]);
    const [msg,setMsg]=useState("");
    const fetchStudent=async()=>{
        try{
            const response=await axios.get(`http://localhost:3001/view-student`);
            setData(response.data);
            setMsg("");
        }
        catch(error){
            setMsg("Not Found");
        }
    };

    return(
        <div>
            {msg && <Alert>{msg}</Alert>}
            <Button variant="secondary" onClick={fetchStudent}>View All</Button>
            {data.length>0?(
                <Table>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                    </tr>
                    {data.map((d)=>(
                        <tr key={d.ID}>
                            <td>{d.Name}</td>
                            <td>{d.ID}</td>
                        </tr>
                    ))}
                </Table>
            ):(<p></p>)}
        </div>
    );
}

export default ViewStudent;