import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import festivalData from '../data/culturalMapfestivals.json'; // Import JSON data directly
import './Festival.css';

const Festival = () => {
    const [festivals, setFestivals] = useState([]);

    // Load festival data from JSON on component mount
    useEffect(() => {
        setFestivals(festivalData); // Load the festival data from the imported JSON
    }, []);

    return (
        <div className="festival-page">
            <h1>Festivals of India</h1>
            <p>Explore the rich diversity of Indian festivals, celebrated across different states and cultures.</p>
            <h2>Popular Festivals</h2>
            
            <div className="festival-cards-container">
                {festivals.map((festival) => (
                    <Link key={festival._id.$oid} to={`/festivals/${festival._id.$oid}`} className="festival-card-link">
                        <div className="festival-card">
                            <div className="festival-info">
                                <h3>{festival.name}</h3>
                                <p>{festival.description}</p>
                            </div>
                            <div className="festival-image">
                                <img src={festival.image} alt={festival.name} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <p className="more-soon">Adding more soon...</p>
        </div>  
    );
};

export default Festival;
