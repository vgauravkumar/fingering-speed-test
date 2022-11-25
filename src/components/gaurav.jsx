import React, { Component } from 'react';

class Gaurav extends Component {
    state = {
        name: "Ga1urav"
    };

    styles = {
        fontSize: 40,
        fontWeight: 'Bold'
    }

    render() {
        return (
            <React.Fragment>
                <h2> Gaurav component in progress... </h2>
                <span style={this.styles} className={"badge badge-primary m2"}>{(this.state.name === "Gaurav") ? <h1>Gaurav</h1> : <h2>NYOB</h2>} </span>
            </React.Fragment >
        )
    }
}

export default Gaurav;