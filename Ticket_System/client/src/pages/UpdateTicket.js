import React,{useState} from 'react';
import axios from 'axios';

function UpdateTicket(){
    const [ID,setID]=useState("");
    const [status,setStatus]=useState("");

    const handleUpdate=async()=>{
        try{
            await axios.put(`http://localhost:3001/update-ticket/${ID}`,{Status:status});
            alert("Updated Successfull");
        }
        catch(error){
            alert("Not Updated");
        }
    };

    return(
        <div>
            <input type="number" placeholder="Enter ID: " onChange={(e)=>setID(e.target.value)} value={ID} />
            <select value={status} onChange={(e)=>setStatus(e.target.value)}>
                
                <option value={"open"}>Open</option>
                <option value={"close"}>Close</option>
            </select>

            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default UpdateTicket;