import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Product = () => (
    <div>
        <h2>Product</h2>
    </div>
)

export function MyRouter() {
    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <hr/>
            <Routes>
                <Route path='/' exact element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/product' element={<Product/>}></Route>
            </Routes>
        </Router>       
    );
}