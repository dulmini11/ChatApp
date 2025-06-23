// // App.jsx
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import ProfilePage from './pages/ProfilePage';

// const App = () => {
//   return (
//     <Routes>
//       <Route path='/' element={<HomePage />} />
//       <Route path='/login' element={<LoginPage />} />
//       <Route path='/profile' element={<ProfilePage />} />
//     </Routes>
//   );
// };

// export default App;
import './index.css';

import React from 'react'

const App = () => {
  return (
    <div ><h1 className="text-3xl text-red-500 font-bold">Tailwind is working!</h1>

    </div>
  )
}

export default App

