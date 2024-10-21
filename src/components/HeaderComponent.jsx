import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ image, title }) => {
    return (
        <header className="header">
            <img src={image} alt={title} className="header-image" />
            <h1 className="header-title">{title}</h1>
        </header>
    );
};

// Prop type validation for better error handling
Header.propTypes = {
    image: PropTypes.string.isRequired, // Ensure that the image is a string
    title: PropTypes.string.isRequired,  // Ensure that the title is a string
};



export default Header;
