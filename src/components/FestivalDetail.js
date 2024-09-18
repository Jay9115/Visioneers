import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import festivalData from '../data/culturalMapfestivals.json'; // Import JSON data directly
import './FestivalDetail.css';

const FestivalDetail = () => {
    const { id } = useParams();  // Retrieve the festival ID from URL
    const [festival, setFestival] = useState(null);

    useEffect(() => {
        const selectedFestival = festivalData.find(festival => festival._id.$oid === id);
        setFestival(selectedFestival);
    }, [id]);

    if (!festival) return <p>Loading festival details...</p>;

    return (
        <div className="festival-detail-page">
            <h1>{festival.name}</h1>
            <img src={festival.image} alt={festival.name} className="festival-detail-image" />
            <p>{festival.description}</p>
            <h2>More about {festival.name}</h2>
            <p>{festival.additionalInfo}</p>
        </div>
    );
};

export default FestivalDetail;
