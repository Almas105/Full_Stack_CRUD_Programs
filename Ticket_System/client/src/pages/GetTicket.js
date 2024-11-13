import React, { useState } from 'react';
import axios from 'axios';

function GetTicket(){
    const [data,setData]=useState([]);
    const fetch=async()=>{
        const user=await axios.get(`http://localhost:3001/get-ticket`);
        setData(user.data);
    };
    return(
        <div>
            <button onClick={fetch}>View</button>

            <table>
                {data.map((d)=>(
                    <tr key={d.ID}>
                        <td>{d.Name}</td>
                    </tr>
                ))}
            </table>
        </div>
        
    );
}

export default GetTicket;