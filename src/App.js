import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import NotFound from './components/NotFound';
import Photo from './features/Photo';

function App() {
    return (
        <div className="photo-app">
            <Suspense fallback={ <LoadingSpinner>Loading</LoadingSpinner> }>
                <BrowserRouter>
                    <Header />

                    {/* <ul>
                        <li><Link to="/photos">Go to photo page</Link></li>
                        <li><Link to="/photos/add">Go to Add new photo page</Link></li>
                        <li><Link to="/photos/123">Go to Edit photo page</Link></li>
                    </ul> */}

                    <Routes>
                        <Route path="/" element={ <Navigate to="/photos" /> } />
                        <Route path="/photos/*" element={ <Photo /> } />
                        <Route path="*" element={ <NotFound /> } />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
