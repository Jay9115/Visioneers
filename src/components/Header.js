import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUmbrellaBeach, faLandmark, faCubes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);

        // Toggle the 'blur' class on the body when the sidebar opens or closes
        if (!sidebarOpen) {
            document.body.classList.add('blur');
        } else {
            document.body.classList.remove('blur');
        }
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
        document.body.classList.remove('blur'); // Remove the blur effect when sidebar closes
    };

    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    <img src="/assets/logo.jpg" alt="Cultural India Logo" className="logo-img" />
                </Link>
                <button className="toggle-btn" onClick={toggleSidebar}>
                    {sidebarOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Sidebar */}
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <ul>
                    <li>
                        <Link to="/map" onClick={closeSidebar}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Map
                        </Link>
                    </li>
                    <li>
                        <Link to="/monuments" onClick={closeSidebar}>
                            <FontAwesomeIcon icon={faLandmark} /> Monuments
                        </Link>
                    </li>
                    <li>
                        <Link to="/3d" onClick={closeSidebar}>
                            <FontAwesomeIcon icon={faCubes} /> 3D monuments (Limited)
                        </Link>
                    </li>
                    <li>
                        <Link to="/festivals" onClick={closeSidebar}>
                            <FontAwesomeIcon icon={faUmbrellaBeach} /> Festivals
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </header>
    );
};

export default Header;
