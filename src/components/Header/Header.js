import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.jpg';
import { getAuth, signOut } from 'firebase/auth';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutIdRef = useRef(null);

  const showDropdownMenu = () => {
    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    setShowDropdown(true);
  };

  const hideDropdownMenu = () => {
    timeoutIdRef.current = setTimeout(() => setShowDropdown(false), 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    };
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      alert('Намасте, гарсан шүү');
    } catch (error) {
      console.error('Гарах гэсэн алдаа үүсэж:', error);
      alert('Гараагүй л байна даа');
    }
};

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" style={{ maxWidth: '50%', height: 'auto' }} />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">НҮҮР</Link>
          </li>
          <li>
            <Link to="/about">БИДНИЙ ТУХАЙ</Link>
          </li>
          <li>
            <Link to="/categories">АСАНА</Link>
          </li>
          <li>
            <Link to="/submitted-poster">СУРГАЛТ</Link>
          </li>
          <li>
            <Link to="/contact">ХОЛБОГДОХ</Link>
          </li>
          <li
            className="teacher-dropdown"
            onMouseEnter={showDropdownMenu}
            onMouseLeave={hideDropdownMenu}
          >
            <Link>БАГШИЙН БУЛАН</Link>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li key="login">
                  <Link to="/login">НЭВТРЭХ</Link>
                </li>
                <li key="logout">
                  <Link to="/" onClick={handleLogout}>ГАРАХ</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
