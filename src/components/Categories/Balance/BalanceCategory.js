import React, { useState } from 'react';
import './balanceCategory.css'; 
import balanceAsanas from '../../data/balanceAsana';
import { useNavigate } from 'react-router-dom';

const BalanceCategory = () => {
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
      <h2 className="balance-asanas-heading">Гарын тэнцвэрийн байрлалууд</h2>
      <div className="balance-asanas-grid">
        {balanceAsanas.map((asana, index) => (
          <div
            key={index}
            className="balance-asana-card"
            onMouseEnter={() => handleAsanaHover(asana)}
            onMouseLeave={handleAsanaLeave}
          >
            <div className="balance-asana-image-container">
              <img src={asana.image} alt={asana.name} className="balance-asana-image" />
            </div>
            <div className="balance-asana-details">
              <h3 className="balance-asana-name">{asana.name}</h3>
              <p className="balance-asana-benefits" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 3 }}>
                {asana.benefits}
              </p>
              <div className="balance-asana-show-more-container">
                <button className="balance-asana-show-more" onClick={() => handleShowMore(asana)}>
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

export default BalanceCategory;
