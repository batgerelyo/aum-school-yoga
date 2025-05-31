import React, { useState } from 'react';
import './SeatedCategory.css';
import seatedAsanas from '../../data/seatedAsana';
import { useNavigate } from 'react-router-dom';

const SeatedCategory = () => {
  const navigate = useNavigate();
  const [selectedAsana, setSelectedAsana] = useState(null);

  const handleAsanaHover = (asana) => {
    setSelectedAsana(asana);
  };

  const handleAsanaLeave = () => {
    setSelectedAsana(null);
  };

  const handleShowMore = () => {
    if (selectedAsana) {
      navigate('/asana-detail', { state: { asana: selectedAsana } });
    }
  };

  return (
    <div>
      <h2 className="seated-asanas-heading">Суусан байрлалууд</h2>
      <div className="seated-asanas-grid">
        {seatedAsanas.map((asana, index) => (
          <div
            key={index}
            className="seated-asana-card"
            onMouseEnter={() => handleAsanaHover(asana)}
            onMouseLeave={handleAsanaLeave}
          >
            <div className="seated-asana-image-container">
              <img src={asana.image} alt={asana.name} className="seated-asana-image" />
            </div>
            <div className="seated-asana-details">
              <h3 className="seated-asana-name">{asana.name}</h3>
              <p className="seated-asana-benefits" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 3 }}>
                {asana.benefits}
              </p>
              <div className="seated-asana-show-more-container">
                <button className="seated-asana-show-more" onClick={handleShowMore}>
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

export default SeatedCategory;
