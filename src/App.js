import React, { Component } from 'react';
import Pet from './pet';
import 'normalize.css';
import './App.css';

class App extends Component {

    render() {
        return (
            <div>
                <h1>Adopt Me!</h1>
                <Pet />
            </div>
        );
    }

}

export default App;
