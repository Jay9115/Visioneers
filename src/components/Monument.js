import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Monuments.css';

const Monuments = () => {
    const [monuments, setMonuments] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/monuments')
            .then(response => setMonuments(response.data))
            .catch(error => console.error('Error fetching monuments:', error));
    }, []);

    return (
        <div className="monuments-page">
            <div className='mon-container'><h1>Monuments of India</h1>
            <p>Discover the majestic monuments that define India's rich history and architecture.</p>
            <h2>Popular Monuments</h2></div>
            
            
            <div className="monuments-cards-container">
                {monuments.map((monument) => (
                    <Link key={monument._id} to={`/monuments/${monument._id}`} className="monuments-card-link">
                        <div className="monuments-card">
                            <div className="monuments-info">
                                <h3>{monument.name}</h3>
                                <p>{monument.description}</p>
                            </div>
                            <div className="monuments-image">
                                <img src={monument.image} alt={monument.name} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <p className="more-soon">Adding more soon...</p>
        </div>
    );
};

export default Monuments;
