import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import stateDataJson from '../data/culturalMapstates.json'; // Import the JSON data directly
import './StatePage.css'; // Import your CSS file

const StatePage = () => {
    const { id } = useParams();
    const [stateData, setStateData] = useState(null);

    useEffect(() => {
        const state = stateDataJson.find(state => state.name.toLowerCase() === id.toLowerCase());
        if (state) {
            setStateData(state);
        } else {
            setStateData(null);
        }
    }, [id]);

    if (!stateData) return <div>Loading...</div>;

    const backgroundImageStyle = {
        backgroundImage: `url(${require(`../assets/${stateData.name.toLowerCase().replace(/\s+/g, '-')}.jpg`)})`,
    };

    return (
        <div className="state-page" style={backgroundImageStyle}>
            <div className="overlay">
                <h1 className="state-name">{stateData.name}</h1>

                <div className="state-description">
                    <p>{stateData.info}</p>
                </div>

                <h2 className="important-places-title">Here are the important places/monuments</h2>
                <div className="monuments">
                    {stateData.monuments.map((monument, index) => (
                        <div className={`monument ${index % 2 === 0 ? 'left-photo' : 'right-photo'}`} key={index}>
                            <div className="monument-photo">
                                {/* Use the photoUrl from the monument data */}
                                <img src={monument.photoUrl} alt={monument.name} />
                            </div>
                            <div className="monument-description">
                                <p>{monument.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="outro-text">{stateData.outro}</p>
            </div>
        </div>
    );
}

export default StatePage;
