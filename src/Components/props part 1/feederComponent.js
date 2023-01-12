import React from "react";
import './style.css'

class MyProp extends React.Component {
    render() {
        return (
            <div className="props">
        <h1>Practice with props:</h1>
        <p>Every time you see the name: {this.props.name}, it is a prop being passed from "feederComponent.js" to a call in "parentComponent.js". props can be used to do more than just names, you can use props to transfer whole objects to a different component</p>
        <p>- {this.props.name} was here</p>

        </div>
        )
    }
}

export default MyProp;