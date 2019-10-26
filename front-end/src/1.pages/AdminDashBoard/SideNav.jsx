import React, { Component } from 'react';
import './sidenav.css';

class SidePanel extends Component {
    render() {
        return (
            <div>
                <div className="sidenav mt-5">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
                </div>
            </div>
        );
    }
}

export default SidePanel;