import React,{useState} from 'react';
import {Button,Alert,Form, Modal}  from 'react-bootstrap';
import axios from 'axios';
function SearchStudent(){
    const [ID,setID]=useState("");
    const [data,setData]=useState(null);
    const [msg,setMsg]=useState("");

    const handleSearch=async(e)=>{
        e.preventDefault();
        try{
            const response=await axios.get(`http://localhost:3001/search-student/${ID}`);
            setData(response.data);
            setMsg("");
        }
        catch(error){
            setMsg("Not Found");
        }
    };

    return(
        <div>
            {msg && <Alert variant="danger">{msg}</Alert>}

<Form onSubmit={handleSearch}>
    <Form.Group>
        <Form.Label>Enter the ID :</Form.Label>
        <Form.Control type="number" value={ID} onChange={(e)=>setID(e.target.value)} />
    </Form.Group>
    <Button variant="primary" type="submit">Search Student</Button>
</Form>

{data && (
    <Modal show={true}>
        <Modal.Header>
            <Modal.Title>{data.ID}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>{data.Name}</p>
        </Modal.Body>
    </Modal>
)}
        </div>
    );
}

export default SearchStudent;