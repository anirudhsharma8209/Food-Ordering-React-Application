import React, { Fragment } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Navigation from './Components/Navbar/Navigation';
const App = () => {
    return (
        <Fragment>
            <BrowserRouter >
                <Navigation />
                <Routes>
                    <Route  element={<Header />} path='/' />
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}

export default App