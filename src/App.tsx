import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import './styles/styles.css';

function App() {

    return (
        <div>
            <Header />
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