import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewBooks() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const onView = async () => {
            try {
                const response = await axios.get('http://localhost:3001/books');
                setData(response.data);
            } catch (error) {
                alert("Error fetching book records.");
            }
        };
        onView();
    }, []);

    return (
        <div>
            <h1>ALL BOOKS</h1>
            {data.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ISBN</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d) => (
                            <tr key={d.ISBN}>
                                <td>{d.Name}</td>
                                <td>{d.ISBN}</td>
                                <td>{d.Author}</td>
                                <td>{d.Category}</td>
                                <td>{d.Quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No book records found.</p>
            )}
        </div>
    );
}

export default ViewBooks;
