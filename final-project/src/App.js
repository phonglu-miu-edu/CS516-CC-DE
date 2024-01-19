import React from 'react';
import './App.scss';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <AppRouter />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
