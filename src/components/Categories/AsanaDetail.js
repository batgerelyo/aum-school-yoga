/* AsanaDetail.js */

import React from 'react';
import { useLocation } from 'react-router-dom';
import './AsanaDetail.css';

const AsanaDetail = () => {
  const location = useLocation();
  const asana = location.state.asana;

  return (
    <div className="detailed-asana">
      <div className="centered-name">{asana.name}</div>
      <div className="left-section">
        <img src={asana.image} alt={asana.name} />
      </div>
      <div className="right-section">
        <div className="details-box">
          <h1>Бусад нэршил</h1>
          <p>{asana.other}</p>
        </div>
        <div className="details-box">
          <h1>Бэлтгэх болон эсрэг байрлал</h1>
          <p>{asana.instructions}</p>
        </div>
        <div className="details-box">
          <h1>Анхаарах зүйлс</h1>
          <p>{asana.contradictions}</p>
        </div>
        <div className="details-box">
          <h1>Ашиг тус</h1>
          <p>{asana.benefits}</p>
        </div>
      </div>
    </div>
  );
}

export default AsanaDetail;
