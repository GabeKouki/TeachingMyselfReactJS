import React from "react";
import './counter.css'

class Button extends React.Component() {
    constructor(props) {
        super(props);
        this.state = {counter: 0}
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
                <p>{this.state.counter}</p>
                <button onClick={() => this.increaseValue}>increment</button>
                <button onClick={() => this.decrementValue}>decrement</button>
                <button onClick={() => this.setValueToZero}>set to zero</button>
            </div>
        );
    }
}

export default Button