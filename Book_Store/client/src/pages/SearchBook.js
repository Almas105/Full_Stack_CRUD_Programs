import React,{useState} from 'react';
import axios from 'axios';

function SearchBook(){
    const [ISBN,setISBN]=useState("");
    const [book,setBook]=useState([]);

    const onSearch=async()=>{
        try{
            const response= await axios.get(`http://localhost:3001/search-book/${ISBN}`);
            setBook(response.data);
        }
        catch(error){
            alert("Book Not Found");
            setBook(null);
        }
    };
    return(
        <div>
            <input type="text" value={ISBN} placeholder="Enter Book ISBN" onChange={(e)=>setISBN(e.target.value)} required />
            <button onClick={onSearch}>Search Book</button>
    
                    {
                        book?(
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>ISBN</th>
                                    <th>Author</th>
                                    <th>Category</th>
                                    <th>Quantity</th>
                                </tr>
                                
                                    <tr key={book.ISBN}>
                                        <td>{book.Name}</td>
                                        <td>{book.ISBN}</td>
                                        <td>{book.Author}</td>
                                        <td>{book.Category}</td>
                                        <td>{book.Quantity}</td>
                                    </tr>
                                
                            </table>
                        ):(<p></p>)}
        </div>
    )
}

export default SearchBook;