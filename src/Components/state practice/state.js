import React from "react";
import './counter.css'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
        this.increaseValue = this.increaseValue.bind(this);
        this.decrementValue = this.decrementValue.bind(this)
        this.setValueToZero = this.setValueToZero.bind(this)

    }

    increaseValue() {
        this.setState({ counter: this.state.counter + 1 })
    }

    decrementValue() {
        this.setState({ counter: this.state.counter - 1 })
    }
    
    setValueToZero() {
        this.setState({ counter: this.state.counter = 0 })
    }


    render() {
        return(
            <div className="counter">
                <h1>Practice with State:</h1>
                <p>in this example I have a class with a constructor that holds this.state.counter which is being updated by an onClick eventListener that invokes a function on this.state.counter</p>
                <p className="number">{this.state.counter}</p>
                <div className="buttoncontainer">
                <button onClick={this.increaseValue}>increment</button>
                <button onClick={this.decrementValue}>decrement</button>
                <button onClick={this.setValueToZero}>set to zero</button>
                </div>
            </div>
        );
    }
}

export default Button