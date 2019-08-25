import React, { Component } from 'react';
// import Pet from './Pet';
import SearchParams from './SearchParams/index';
import 'normalize.css';
import './App.css';

class App extends Component {

    render() {
        return (
            <div>
                <h1>Adopt Me!</h1>
                <SearchParams />
            </div>
        );
    }

}

export default App;
