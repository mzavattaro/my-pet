import React, { Component } from 'react';
import Pet from './pet';
import 'normalize.css';
import './App.css';

class App extends Component {

    render() {
        return (
            <div>
                <h1>Adopt Me!</h1>
                <Pet name="Luna" animal="Dog" breed="Havanese" />
                <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
                <Pet name="Doink" animal="Cat" breed="Mixed" />
            </div>
        );
    }

}

export default App;
