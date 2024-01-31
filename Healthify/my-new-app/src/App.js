import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Active from './Active';
import Age from './Age';
import Gen from './Gen';
import Lang from './Lang';
import Login from './Login';
import Name from './Name';
import Health from './Health'; 
import SignIn from './SignIn';
import SignUp from './SignUp';
import Where from './where';
import WeightCorrectionPage from './WeightCorrectionPage';
import What from './What';
import What1 from './What1';
import Welcome from './Welcome';
import AgeHeightWeight from './AgeHeightWeight';
import Gender from './Gender';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Welcome />} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path="/what" element={<What1 />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/where" element={<Where />} />
          <Route path="/name" element={<Name />} />
          <Route path="/lang" element={<Lang />} />
          <Route path="/gen" element={<Gender />} />
          {/* <Route path="/age" element={<Age />} /> */}
          <Route path="/age" element={<AgeHeightWeight/>} />
          <Route path="/active" element={<Active />} />
          {/* <Route path="/weight-correction" element={<WeightCorrectionPage />} /> */}
          <Route path="/next" element={<Health/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
