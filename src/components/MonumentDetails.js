import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './MonumentsDetail.css';

const MonumentsDetail = () => {
    const { id } = useParams();  // Retrieve the monument ID from URL
    const [monument, setMonument] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/monuments/${id}`)
            .then(response => {
                console.log(response.data);  // Log the data to check response
                setMonument(response.data);
            })
            .catch(error => {
                console.error('Error fetching monument data:', error);
                setError('Failed to load monument details');
            });
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!monument) return <p>Loading monument details...</p>;

    return (
        <div className="monument-detail-page">
            <h1>{monument.name}</h1>
            <img src={monument.image} alt={monument.name} className="monument-detail-image" />
            <p>{monument.description}</p>
            <h2>More about {monument.name}</h2>
            <p>{monument.additionalInfo}</p>
        </div>
    );
};

export default MonumentsDetail;
