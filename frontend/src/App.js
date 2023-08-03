import React from 'react';
import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from "./pages/home/Home";
import Profile from './pages/profile/Profile';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { AuthContext } from './state/AuthContext';

function App() {

  const { user } = useContext(AuthContext); // userの状態が変わっても取って来られる

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={user ? <Home /> : <Register />} />{/* userがなければ新規登録 */}
          <Route path='/register' element={user ? <Navigate to="/" /> : <Register />} />
          <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} /> {/* ログインに成功したらホームにいく */}
          <Route path='/profile/:username' element={<Profile />} />
          {/* :usernameの部分はuseParamsを使ってとれる */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
