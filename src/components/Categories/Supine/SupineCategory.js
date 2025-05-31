import React from 'react';
import './supineCategory.css'; 
import supineAsanas from '../../data/supineAsana'; 
import { useNavigate } from 'react-router-dom';

const SupineCategory = () => {
  const navigate = useNavigate();

  const handleShowMore = (asana) => {
    navigate('/asana-detail', { state: { asana } });
  };

  return (
    <div>
      <h2 className="supine-asanas-heading">Урвуу байрлалууд</h2>
      <div className="supine-asanas-grid">
        {supineAsanas.map((asana, index) => (
          <div key={index} className="supine-asana-card">
            <div className="supine-asana-image-container">
              <img src={asana.image} alt={asana.name} className="supine-asana-image" />
            </div>
            <div className="supine-asana-details">
              <h3 className="supine-asana-name">{asana.name}</h3>
              <p className="supine-asana-benefits" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 3 }}>
                {asana.benefits}
              </p>
              <div className="supine-asana-show-more-container">
                <button className="supine-asana-show-more" onClick={() => handleShowMore(asana)}>
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

export default SupineCategory;
