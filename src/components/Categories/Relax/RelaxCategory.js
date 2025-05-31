import React, { useState } from 'react';
import './RelaxCategory.css'; 
import relaxAsanas from '../../data/relaxAsana'; 
import { useNavigate } from 'react-router-dom';

const RelaxCategory = () => {
  const [selectedAsana, setSelectedAsana] = useState(null);
  const navigate = useNavigate();

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
      <h2 className="standing-asanas-heading">Амраах байрлал</h2>
      <div className="standing-asanas-grid">
        {relaxAsanas.map((asana, index) => (
          <div
            key={index}
            className="standing-asana-card"
            onMouseEnter={() => handleAsanaHover(asana)}
            onMouseLeave={handleAsanaLeave}
          >
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

export default RelaxCategory;
