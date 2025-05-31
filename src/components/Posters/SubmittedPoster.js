import React from 'react';
import './SubmittedPoster.css';

const SubmittedPoster = () => {
    const poster = localStorage.getItem('poster');

    return (
        <div className="submitted-poster">
            {poster && <img src={poster} alt="Submitted Poster" />}
        </div>
    );
};

export default SubmittedPoster;
