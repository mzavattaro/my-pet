import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';

const Pet = ({ name, animal, breed }) => (
    <div>
        <h1>{name}</h1>
        <h2>{animal}</h2>
        <h2>{breed}</h2>
    </div>
);

export default Pet;

Pet.propTypes = {
    name: PropTypes.string.isRequired,
    animal: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
};
