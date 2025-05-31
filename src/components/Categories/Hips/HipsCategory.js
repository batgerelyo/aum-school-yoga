import React, { useState } from 'react';
import './HipsCategory.css'; 
import hipsAsanas from '../../data/hipsAsana';
import { useNavigate } from 'react-router-dom';

const HipsCategory = () => {
  const navigate = useNavigate();
  const [selectedAsana, setSelectedAsana] = useState(null);

  const handleAsanaHover = (asana) => {
    setSelectedAsana(asana);
  };

  const handleAsanaLeave = () => {
    setSelectedAsana(null);
  };

  const handleShowMore = (asana) => {
    navigate('/asana-detail', { state: { asana } });
  };

  return (
    <div>
      <h2 className="hips-asanas-heading">Ташаа сунгах байрлалууд</h2>
      <div className="hips-asanas-grid">
        {hipsAsanas.map((asana, index) => (
          <div
            key={index}
            className="hips-asana-card"
            onMouseEnter={() => handleAsanaHover(asana)}
            onMouseLeave={handleAsanaLeave}
          >
            <div className="hips-asana-image-container">
              <img src={asana.image} alt={asana.name} className="hips-asana-image" />
            </div>
            <div className="hips-asana-details">
              <h3 className="hips-asana-name">{asana.name}</h3>
              <p className="hips-asana-benefits" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 3 }}>
                {asana.benefits}
              </p>
              <div className="hips-asana-show-more-container">
                <button className="hips-asana-show-more" onClick={() => handleShowMore(asana)}>
                  Дэлгэрэнгүй
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HipsCategory;
