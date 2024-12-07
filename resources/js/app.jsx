import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header/Header';
import Hero from '../components/header/Hero';
import Clients from '../components/content/Clients';
import Stats from '../components/content/Stats';
import Opportunities from '../components/content/Opportunities';
import Gallery from '../components/content/Gallery';
import Testimonials from '../components/content/Testimonials';
import NansenAnalytics from '../components/content/NansenAnalytics';
import Footer from '../components/footer/Footer';

function App() {

    return (
        <>
            <Header />
            <Hero />
            <Clients />
            <Opportunities />
            <Stats />   
            <Gallery />
            <Testimonials />
            <NansenAnalytics />
            <Footer />
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));
