import React from 'react';
import { createRoot } from 'react-dom/client';

import { Home } from './home';
import { About } from './about';
import { Header } from './header';
import { Footer } from './footer';
import { Projects } from './projects';

import "../input.css"

// Render your React component instead
const root = createRoot(document.getElementById('app'));

root.render(

    <div>
        <Header />
        <main>
            <Home />
            
            <About />

            <Projects />
            
        </main>
        
        <Footer />

    </div>

);