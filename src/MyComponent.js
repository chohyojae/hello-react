import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      My New and Wonderful Component!, My name is {name}.<br />
      Children: {children ? children : 'NONE'}.<br />
      My favorite number is {favoriteNumber}.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '리액트',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
