import React from 'react';
import PropTypes from 'prop-types';

//header comp. to display a title and an associated image
const Header = ({ image, title }) => {
    return (
        <header className="header">
            <img src={image} alt={title} className="header-image" />
            <h1 className="header-title">{title}</h1>
        </header>
    );
};
// prop types validation for header component
Header.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};


export default Header;
