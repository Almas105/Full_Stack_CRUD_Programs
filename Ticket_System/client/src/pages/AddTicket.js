import React, { useState } from 'react';
import axios from 'axios';

function AddTicket() {
    const [ticketData, setTicketData] = useState({
        ID: '',
        Name: '',
        Status: 'open', // default status can be changed as needed
    });

    // Update the ticketData state when inputs change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTicketData({
            ...ticketData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:3001/add-ticket`, ticketData);
            alert('Inserted Successfully');
        } catch (error) {
            alert('Error submitting ticket');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="ID"
                    name="ID"
                    value={ticketData.ID} // Bind input to state
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Name"
                    name="Name"
                    value={ticketData.Name} // Bind input to state
                    onChange={handleChange}
                />
                <select name={ticketData.Status} onChange={handleChange}>
                    <option value="open">Open</option>
                    <option value="close">Close</option>
                </select>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddTicket;
