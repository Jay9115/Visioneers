import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import StatePage from './components/StatePage';
import MapComponent from './components/MapComponent';
import Festival from './components/Festival';
import Monument from './components/Monument';
import ThreeDModel from './components/ThreeDModel';
import FestivalDetail from './components/FestivalDetail';
import Model from './components/Model';
import './App.css';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/state/:id" element={<StatePage />} />
                <Route path="/map" element={<MapComponent />} />
                <Route path="/festivals" element={<Festival />} />
                <Route path="/monuments" element={<Monument />} />
                <Route path="/3d" element={<Model/>} />
                <Route path="/festivals/:id" element={<FestivalDetail />} />
            </Routes>
        </Router>
    );
}
export default App;