import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Booking from './pages/Booking/Booking';
import Blog from './pages/Blog/Blog';
import Location from './pages/Location/Location';
import Registration from './pages/Registration/Registration';
// Import other pages similarly

function App() {
    return (
        <Router>
            <div>
                {/* Place Navbar here if it's global */}
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/location" element={<Location />} />
                    <Route path="/registration" element={<Registration />} />
                    {/* Define other routes */}
                </Routes>
                {/* Place Footer here if it's global */}
            </div>
        </Router>
    );
}

export default App;

