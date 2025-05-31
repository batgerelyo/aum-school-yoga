import React, { useState } from 'react';
import './TwistCategory.css';
import twistAsanas from '../../data/twistAsana';
import { useNavigate } from 'react-router-dom';

const TwistCategory = () => {
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
      <h2 className="twist-asanas-heading">Мушгирах байрлалууд</h2>
      <div className="twist-asanas-grid">
        {twistAsanas.map((asana, index) => (
          <div
            key={index}
            className="twist-asana-card"
            onMouseEnter={() => handleAsanaHover(asana)}
            onMouseLeave={handleAsanaLeave}
          >
            <div className="twist-asana-image-container">
              <img src={asana.image} alt={asana.name} className="twist-asana-image" />
            </div>
            <div className="twist-asana-details">
              <h3 className="twist-asana-name">{asana.name}</h3>
              <p className="twist-asana-benefits" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 3 }}>
                {asana.benefits}
              </p>
              <div className="twist-asana-show-more-container">
                <button className="twist-asana-show-more" onClick={() => handleShowMore(asana)}>
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

export default TwistCategory;
