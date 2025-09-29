import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import './styles/styles.css';

function App() {

    return (
        <div>
            <Navbar />
            <Hero />
            {/* 
            
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
            
            */}
        </div>
    );
}
export default App;