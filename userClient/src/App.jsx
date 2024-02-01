import React, { Fragment, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Navigation from './Components/Navbar/Navigation';
const App = () => {
    const [headerEnable, setHeaderEnable] = useState(true);    
    return (
        <Fragment>
            <BrowserRouter >
                <Navigation />
                <Routes>
                    <Route  element={<Header headerEnable={headerEnable} setHeaderEnable={setHeaderEnable} />} path='/' />
                </Routes>
            </BrowserRouter>
        </Fragment>
    )
}

export default App