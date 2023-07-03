import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from './Components/UserLayout';
import Login from './Pages/Login';
import Layout from './Components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Pages/SignUp';
import ForgetPassword from './Pages/ForgetPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='user' element={<UserLayout />}>
              <Route path='login' element={<Login />} ></Route>
              <Route path='register' element={<SignUp />} ></Route>
              <Route path='forget-password' element={<ForgetPassword />} ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
