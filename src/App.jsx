import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Pages/home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Pages/login';
import Signup from './components/Pages/Signup';
import ForgotPassword from './components/Pages/ForgotPassword';
import VPlayer from './components/Pages/VPlayer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null); // Track user state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in:', user);
        setUser(user); // Set the user state to the authenticated user
      } else {
        console.log('User is signed out');
        setUser(null); // Clear user state
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/signup" />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/player/:id" element={<VPlayer />} />
    </Routes>
  );
}

export default App;
