import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Diagnosis from './pages/Diagnosis';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Blogs from './pages/Blogs';
import AddBlog from './pages/AddBlog';
import AuthProvider from './contexts/auth-provider';
import Doctor from './pages/Doctor';
import Doctordetail from './pages/Doctordetail';
import Doctorcard from './pages/Doctocard';
import Doctorpage from './pages/Doctorpage';
import Cartpage from './pages/Cartpage';

const App = () => {
  const [showIframe, setShowIframe] = useState(false);

  const toggleIframe = () => {
    setShowIframe(!showIframe);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add-blog' element={<AddBlog />} />
          <Route path='/cart' element={<Cartpage />} />
          <Route path='/doctorcard' element={<Doctorcard />} />
          <Route path='/doctordetail' element={<Doctordetail />} />
          <Route path='/doctorpage' element={<Doctorpage />} />
          <Route path='/diagnosis' element={<Diagnosis />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/doctor' element={<Doctor />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
