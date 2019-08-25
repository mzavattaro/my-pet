import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from '../useDropdown/index';
import print from '../utilities/print';

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA');
    const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
    const [breeds, setBreeds] = useState([]);
    const [breed, BreedDropdown] = useDropdown('Breed', '', breeds);

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

                <AnimalDropdown />
                <BreedDropdown />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
