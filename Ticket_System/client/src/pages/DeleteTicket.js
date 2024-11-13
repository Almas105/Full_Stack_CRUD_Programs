import React,{useState} from 'react';
import axios from 'axios';

function DeleteTicket(){
    const [ID,setID]=useState("");

    const handleDelete=async()=>{
        try{
            await axios.delete(`http://localhost:3001/delete-ticket/${ID}`);
            alert("Deleted Succesfully");
        }
        catch(error){
            alert("Cannot Delete");
        }
    };

    return(
        <div>
            <input type="number" placeholder="Enter the ID" onChange={(e)=>setID(e.target.value)} value={ID} />
            <button onClick={handleDelete}>Delete Ticket</button>
        </div>
    );
}

export default DeleteTicket;