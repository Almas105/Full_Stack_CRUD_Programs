import React, {useState} from 'react';
import axios from 'axios';

function DeleteBook(){
    const [ISBN,setISBN]=useState("");
    
    const onDelete=async()=>{
        try{
            await axios.delete(`http://localhost:3001/delete-book/${ISBN}`);
            alert("Deleted the Book successfully");
        }
        catch(error){
            alert("Error: Cant delete");
        }
    }

    return(
        <div>
             <input type="text" value={ISBN} placeholder="Enter ISBN" onChange={(e)=>setISBN(e.target.value)} required />
             <button onClick={onDelete} >Delete</button>
        </div>
       
    );
}

export default DeleteBook;