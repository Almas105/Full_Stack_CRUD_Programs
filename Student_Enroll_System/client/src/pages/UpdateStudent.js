import React, { useState } from 'react';
import { Alert, Button,Form } from 'react-bootstrap';
import axios from 'axios';

function UpdateStudent(){
    const [ID,setID]=useState("");
    const [name,setName]=useState("");
    const [msg, setMsg] = useState("");
    const handleUpdate=async()=>{
        try{
            await axios.put(`http://localhost:3001/update-student/${ID}`,{Name:name});
            setMsg("Updated");

        }
        catch(error){
            setMsg("Not Found");
        }
    };

    return(

        <div>
            {msg && <Alert variant={msg.includes('Updated')?'success':'danger'}>{msg}</Alert>}
            <Form >
    <Form.Group>
        <Form.Label>Enter the ID :</Form.Label>
        <Form.Control type="number" value={ID} onChange={(e)=>setID(e.target.value)} />
    </Form.Group>
    <Form.Group>
        <Form.Label>Enter the Name :</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    </Form.Group>
    <Button onClick={handleUpdate}>Update Student</Button>
</Form>
        </div>
    );

}

export default UpdateStudent;