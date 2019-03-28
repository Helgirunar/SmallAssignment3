import React from 'react';
import NavigationBar from '../NavigationBar';
import Bosses from '../Bosses/Bosses'

class App extends React.Component {
    componentDidMount() {
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
        <div className="container">
        <NavigationBar />
        <Bosses />
        </div>
        )
    }
};

export default App;
