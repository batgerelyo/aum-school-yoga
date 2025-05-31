import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 
import { app, analytics } from './components/firebase/config'; 
import { Navigate } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import Categories from './components/Categories/Categories';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Authentication/Login';
import LogOut from './components/Authentication/LogOut';
import StandingCategory from './components/Categories/Standing/StandingCategory';
import BalanceCategory from './components/Categories/Balance/BalanceCategory';
import SupineCategory from './components/Categories/Supine/SupineCategory';
import HipsCategory from './components/Categories/Hips/HipsCategory';
import RelaxCategory from './components/Categories/Relax/RelaxCategory';
import ProneCategory from './components/Categories/Prone/ProneCategory';
import SeatedCategory from './components/Categories/Seated/SeatedCategory';
import TwistCategory from './components/Categories/Twist/TwistCategory';
import SubmitNewPoster from './components/Posters/SubmitNewPoster'; 
import SubmittedPoster from './components/Posters/SubmittedPoster'; 
import AsanaDetail from './components/Categories/AsanaDetail';

function App() {
  const [user, setUser] = useState(null); 
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUserLogin = (user) => {
    setUser(user);
    setLoggedIn(true);
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        handleUserLogin(user);
      } else {
        handleUserLogout();
      }
    });

    return () => unsubscribe();
  }, []);

  const handleUserLogout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/login" element={<Login onUserLogin={handleUserLogin} />} />
        <Route path="/submitNewPoster" element={<SubmitNewPoster />} />
        <Route 
          path="/submit-new-poster" 
          element={loggedIn ? <SubmitNewPoster user={user} /> : <Navigate to="/login" />} 
        />
        <Route path="/submitted-poster" element={<SubmittedPoster user={user} />} />
        <Route path="/categories/standing" element={<StandingCategory />} />
        <Route path="/categories/balance" element={<BalanceCategory />} />
        <Route path="/categories/supine" element={<SupineCategory />} />
        <Route path="/categories/hips" element={<HipsCategory />} />
        <Route path="/categories/relax" element={<RelaxCategory />} />
        <Route path="/categories/prone" element={<ProneCategory />} />
        <Route path="/categories/seated" element={<SeatedCategory />} />
        <Route path="/categories/twist" element={<TwistCategory />} />
        <Route path="/asana-detail" element={<AsanaDetail />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
