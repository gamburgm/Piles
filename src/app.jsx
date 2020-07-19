import React, { Component } from 'react';

class Banana extends Component {
    render() {
        return (
            <div>
                <p>Banana grams 1</p>
                <p>Banana grams 2</p>
                <p>Banana grams 3</p>
                <p>Banana grams 4</p>
            </div>
        );
    }
}

export default function App() {
    return (
        <div>
            <h1 onClick={alert('Hi user!')}>ooga booga</h1>
            <h2>chungus</h2>
            <Banana/>
        </div>
    );
}
