import React, { Component } from 'react';
import './app.css';
import Image from './card.png';

class BlackBox extends Component {
    render() {
        return (
            <div className="pile">
            </div>
        );
    }
}

export default function App() {
    return (
        <div className='pile-container'>
            <BlackBox/>
            <BlackBox/>
            <BlackBox/>
            <BlackBox/>
            <img src={Image}/>
        </div>
    );
}
