import React, { useState } from 'react';
import './ProneCategory.css';
import proneAsanas from '../../data/proneAsana';
import { useNavigate } from 'react-router-dom';

const ProneCategory = () => {
  const navigate = useNavigate();

  const handleShowMore = (asana) => {
    navigate('/asana-detail', { state: { asana } });
  };

  return (
    <div>
      <h2 className="prone-asanas-heading">Хойш гэдийх байрлалууд</h2>
      <div className="prone-asanas-grid">
        {proneAsanas.map((asana, index) => (
          <div key={index} className="prone-asana-card">
            <div className="prone-asana-image-container">
              <img src={asana.image} alt={asana.name} className="prone-asana-image" />
            </div>
            <div className="prone-asana-details">
              <h3 className="prone-asana-name">{asana.name}</h3>
              <p className="prone-asana-benefits" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 3 }}>
                {asana.benefits}
              </p>
              <div className="prone-asana-show-more-container">
                <button className="prone-asana-show-more" onClick={() => handleShowMore(asana)}>
                  Дэлгэрэнгүй
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProneCategory;
