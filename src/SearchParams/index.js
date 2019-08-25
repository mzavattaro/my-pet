import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import print from '../utilities/print';

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA');
    const [animal, setAnimal] = useState('Dog');

    print('state of location', location);

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <h1>{animal}</h1>
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="Location" onChange={event => setLocation(event.target.value)} />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal" value={animal} onChange={event => setAnimal(event.target.value)} onBlur={event => setAnimal(event.target.value)}>
                        <option>All</option>
                        {ANIMALS.map(animal => (<option value={animal}>{animal}</option>))}
                    </select>

                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
