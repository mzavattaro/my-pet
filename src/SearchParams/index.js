import React, { useState } from 'react';
import print from '../utilities/print';

const SearchParams = () => {
    const [location, setLocation] = useState('Seattle, WA');
    print('state of location', location);

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="Location" onChange={event => setLocation(event.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;
