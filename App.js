import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/home';
import MarinaBeach from './components/MarinaBeach';
import BesanBeach from './components/besan';
import PebbleBeach from './components/pebble';
import SanBeach from './components/san';
import KadimeduBeach from './components/Kadimedu';
import CovelongBeach from './components/Covelong';
import NeetuBeach from './components/Neetu';
import NeelaBeach from './components/Neela';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/marina" element={<MarinaBeach />} /> {/* Route for Marina Beach page */}
                <Route path="/pebble" element={<PebbleBeach />} />
                <Route path="/besan" element={<BesanBeach />} />
                <Route path="/san" element={<SanBeach />} />
                <Route path="/Kadimedu" element={<KadimeduBeach />} />
                <Route path="/Covelong" element={<CovelongBeach />} />
                <Route path="/Neetu" element={<NeetuBeach />} />
                <Route path="/Neela" element={<NeelaBeach />} />
            </Routes>
        </Router>
    );
};

export default App;
