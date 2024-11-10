import React, {useState} from 'react';
import axios from 'axios';

function UpdateBook(){
    const [ISBN,setISBN]=useState("");
    const [quantity,setQuantity]=useState("");
    const HandleUpdate=async()=>{
        try{
            const book=await axios.put(`http://localhost:3001/update-book/${ISBN}`,{Quantity:quantity});
            if(book){
                alert("The book has been updated");
            }
            else{
                alert("Not Updated");
            }
        }
        catch(error){
            alert("Cannot be updated");
        }
    };

    return(
        <div>
            <input type="text" value={ISBN} placeholder="Enter ISBN" onChange={(e)=>setISBN(e.target.value)}  required/>
            <input type="number" value={quantity} placeholder="Enter Quantity" onChange={(e)=>setQuantity(e.target.value)} required/>
            <button onClick={HandleUpdate}>Update</button>
        </div>

    );
}

export default UpdateBook;