import React from "react"
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
import Footer from './components/Footer';

function App() {
    return (
        <Router>
        <Navbar  />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/products' element={<Products />} />
            <Route path='/login' element={<Login />} />
            <Route path='/sign-up' element={<SignUp />} />

        </Routes>
        <Footer/>
        </Router>
       
    );
}

export default App