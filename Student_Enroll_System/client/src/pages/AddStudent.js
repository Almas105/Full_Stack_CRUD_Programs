import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import axios from 'axios';

function AddStudent() {
    const [data, setData] = useState({
        Name: "",
        ID: ""
    });
    const [msg, setMsg] = useState("");
   

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3001/add-student`, data);
            setMsg("Student Added into Database");
           
        } catch (error) {
            setMsg("Student not added");
            
        }
    };

    return (
        <div>
            {msg && <Alert>{msg}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter the Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="Name" // Added name attribute
                        onChange={handleChange}
                        value={data.Name}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter the Number</Form.Label>
                    <Form.Control
                        type="number"
                        name="ID" // Added name attribute
                        onChange={handleChange}
                        value={data.ID}
                        required
                    />
                </Form.Group>
                <Button type="submit" variant="primary">Add</Button>
            </Form>
        </div>
    );
}

export default AddStudent;
