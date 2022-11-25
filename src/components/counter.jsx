import React, { Component } from 'react';

class Counter extends Component {

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    state = {
        count: 0,
        startTime: null,
        time: 0,
        tags: ['tag1', 'tag2', 'tag3'],
        imageUrl: 'http://picsum.photos/200'
    }

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    }

    formatCount() {
        return this.state.count ? this.state.count : 'Zero';
    }
    handleIncrement = product => {
        // console.log(product);
        this.setState({
            count: this.state.count + 1
        });
    };

    handleDecrement = product => {
        // console.log(product);
        this.setState({
            count: this.state.count - 1
        });
    };

    handleClick = () => {
        if (this.state.count === 0 && this.state.startTime === null) {
            // console.log("handle click called1");
            // this.state.startTime = new Date().getTime();
            this.setState({
                count: this.state.count + 1,
                startTime: new Date().getTime()
            });
        } else if ((this.state.count > 0) && ((new Date().getTime() - this.state.startTime) <= 1000 * 10)) {
            // console.log("handle click called2");
            // console.log("smth", this.state);
            this.setState({
                count: this.state.count + 1,
                time: new Date().getTime() - this.state.startTime
            });
        } else {
            // console.log("handle click called3");
            this.setState({
                time: 0
            });
        }
    };

    isDisabled = () => {
        return 'btn btn-secondary btn-sm m-2'
    }

    render() {
        let classes = this.pickClasses();
        return (
            <React.Fragment>
                {/* <img src={this.state.imageUrl} alt="Some Image"></img> */}
                <h3>Fingering Speed Test</h3>
                <br />
                <button onClick={() => this.handleClick()} className={this.isDisabled()}> Play </button>
                <span style={this.styles} className={classes}>{this.formatCount()}</span>
                <br />
                Time:
                <span> {(this.state.time ? this.state.time : 0) / 1000} / 10 </span>
                {/* <button onClick={() => this.handleIncrement({ id: 1 })} className='btn btn-secondary btn-sm m-2'>+</button>
                <button onClick={() => this.handleDecrement({ id: 1 })} className='btn btn-secondary btn-sm m-2'>-</button> */}
                <ul>
                    {this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
        );
    }

    pickClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count) ? 'primary' : 'warning';
        return classes;
    }
}

export default Counter;