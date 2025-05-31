import React from 'react';
import './SubmitNewPoster.css';

const SubmitNewPoster = () => {
    const handleImageUpload = event => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            localStorage.setItem('poster', reader.result);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="center-container">
            <input type="file" id="fileInput" onChange={handleImageUpload} style={{ display: 'none' }} />
            <label htmlFor="fileInput" className="custom-file-upload">
                Зарын зураг аа оруулна уу
            </label>
        </div>
    );
};

export default SubmitNewPoster;
