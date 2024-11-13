import React, {  useState } from 'react';
import axios from 'axios';

function ViewTicket(){
    const [ID,setID]=useState("");
    const [data,setData]=useState("");

   const handleChange=async()=>{
        try{
            const response= await axios.get(`http://localhost:3001/view-ticket/${ID}`);
            setData(response.data);
        }
        catch(error){
            alert("Ticket not found");
        }
   };
    return(
        <div>
           <input type="number" placeholder="Enter ID" value={ID} onChange={(e)=>setID(e.target.value)} />
           <button onClick={handleChange}>View</button>
           {data && (
            <div>
                 <p> {data.Name} </p>
                 <p> {data.ID}</p>
                 <p> {data.Status}</p>
                 <p> {data.CreatedDate} </p>
                 
            </div>
           
           )}
        </div>
    );
}

export default ViewTicket;