import ContactButton from "components/ContactButton";
import React from 'react';
import './App.scss';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import ScrollToAnchor from "./routers/ScrollToAnchor";
import ScrollToTop from "./routers/ScrollToTop";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <div className="container-fluid home">
                    <ContactButton />
                    <main className="container">
                        <AppRouter />
                    </main>
                </div>
                <Footer />
                <ScrollToTop />
                <ScrollToAnchor />
            </BrowserRouter>
        </div>
    );
}

export default App;
