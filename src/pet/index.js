import React from 'react';
import PropTypes from 'prop-types';

const Pet = ({ name, animal, breed }) => React.createElement('div', {}, [
    React.createElement('hi', {}, name),
    React.createElement('hi', {}, animal),
    React.createElement('hi', {}, breed),
]);

export default Pet;

Pet.propTypes = {
    name: PropTypes.string.isRequired,
    animal: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
};
