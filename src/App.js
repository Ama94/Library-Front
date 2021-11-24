import React, { useState, useEffect } from 'react';
import { BrowserRouter,Switch, Routes, Route, browserHistory, NavLink } from 'react-router-dom';

import Login from './Login';

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Overdue from "./container/Overdue/overdue";
import Add from "./container/Add/Add";
import Main from "./container/Main/Main";

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

function App() {
    const token = getToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <div className="content">
                        <Header></Header>
                        <Routes>
                            <Route exact path='/' element={<Main/>}/>
                            {/*<Route exact path='/login' element={<Login/> }/>*/}
                            <Route path={'/Overdue'} element={<Overdue/>}/>
                            <Route path={'/Add'} element={<Add/>}/>
                        </Routes>
                        <Footer></Footer>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;