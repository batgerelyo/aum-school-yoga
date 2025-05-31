import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyAQrou9lfCZp3wE-Ap2VOUUqBdn6AXebs4",
  authDomain: "aum-yoga-school.firebaseapp.com",
  projectId: "aum-yoga-school",
  storageBucket: "aum-yoga-school.appspot.com",
  messagingSenderId: "245299682798",
  appId: "1:245299682798:web:10e6108fb4deaee3b4c2ff",
  measurementId: "G-3Q1XRB2C0M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
