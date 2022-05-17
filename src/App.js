import React, {useState, useEffect} from 'react';
import Fruta from './components/Fruta'
import CheckIn from './components/CheckIn';

import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const App = () => {
    
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Fruta name="Manzana" price={4} />}>
            </Route>
            <Route path="/hola" element={<CheckIn total={4500} />}>
            </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;