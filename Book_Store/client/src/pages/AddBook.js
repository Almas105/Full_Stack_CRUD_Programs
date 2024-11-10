import React, {useState} from 'react';
import axios from 'axios';
import './style.css';

function AddBook(){
    const [book,setbook]=useState({
        Name: "",
    ISBN: "",
    Author: "",
    Category:"",
    Quantity:0
    });

    const HandleChange=(e)=>{
        const {name,value}=e.target;
        setbook({...book,[name]:value});
    };
    const HandleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await axios.post(`http://localhost:3001/add-book`,book);
            
            alert("Book added succesfully");
            
        }
        catch(error){
            alert("Error adding book");
        }
    };
    return(
        <form onSubmit={HandleSubmit}>
            <p>Enter The Book: <input type="text" name="Name"  placeholder="Enter Book Name" onChange={HandleChange} required /></p>
            <p>Enter the ISBN Number: <input type="text" name="ISBN"  placeholder="Enter Book ISBN" onChange={HandleChange} required /></p>
            <p>Enter the Author of the Book: <input type="text" name="Author" placeholder="Enter Author" onChange={HandleChange} required /></p>
            <p>Enter the Category of the Book: <input type="text" name="Category"   placeholder="Enter Category " onChange={HandleChange} required /></p>
            <p>Enter the Quantity :<input type="number" name="Quantity"   placeholder="Enter Quantity " onChange={HandleChange} required /></p>
            <button type="submit" onSubmit={()=>setbook(null)}>Add Book</button>
        </form>
    );
}
export default AddBook;