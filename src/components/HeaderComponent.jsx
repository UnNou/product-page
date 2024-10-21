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

Header.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};


export default Header;
