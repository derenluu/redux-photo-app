import React from 'react';
import './LoadingSpinner.scss';

const LoadingSpinner = (props) => {
    return (
        <div className="loading-spinner-container">
            <div className="loading-spinner"> { props.children } </div>
        </div>
    );
};

export default LoadingSpinner;
