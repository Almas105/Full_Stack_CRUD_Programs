import React, { useState } from 'react';
import { Alert, Button,Form } from 'react-bootstrap';
import axios from 'axios';

function DeleteStudent(){
    const [ID,setID]=useState("");
    
    const [msg, setMsg] = useState("");
    const handleDelete=async()=>{
        try{
            await axios.delete(`http://localhost:3001/delete-student/${ID}`);
            setMsg("Deleted");

        }
        catch(error){
            setMsg("Not Found");
        }
    };

    return(

        <div>
            {msg && <Alert variant={msg.includes('Deleted')?'success':'danger'}>{msg}</Alert>}
            <Form >
    <Form.Group>
        <Form.Label>Enter the ID :</Form.Label>
        <Form.Control type="number" value={ID} onChange={(e)=>setID(e.target.value)} />
    </Form.Group>
    <Button onClick={handleDelete}>Delete Student</Button>
</Form>
        </div>
    );

}

export default DeleteStudent;