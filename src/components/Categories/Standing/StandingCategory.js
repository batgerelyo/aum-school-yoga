import React from 'react';
import './StandingCategory.css';
import standingAsanas from '../../data/standingAsana';
import { useNavigate } from 'react-router-dom';

const StandingCategory = () => {
  const navigate = useNavigate();

  const handleShowMore = (asana) => {
    navigate('/asana-detail', { state: { asana } });
  };

  return (
    <div>
      <h2 className="standing-asanas-heading">Зогсоо байрлалууд</h2>
      <div className="standing-asanas-grid">
        {standingAsanas.map((asana, index) => (
          <div key={index} className="standing-asana-card">
            <div className="standing-asana-image-container">
              <img src={asana.image} alt={asana.name} className="standing-asana-image" />
            </div>
            <div className="standing-asana-details">
              <h3 className="standing-asana-name">{asana.name}</h3>
              <p className="standing-asana-benefits" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 3 }}>
                {asana.benefits}
              </p>
              <div className="standing-asana-show-more-container">
                <button className="standing-asana-show-more" onClick={() => handleShowMore(asana)}>
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

export default StandingCategory;
