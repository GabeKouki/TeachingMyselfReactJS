import React from 'react';
import { Button } from './button';
import './talker.css'

export class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return (
        <div className='styleme'>
    <h1>More props!</h1>
    <p>in this example I am passing in a function as a prop instead of a variable or string. This function sends an alert to the page with an onclick eventListener</p>
    <Button talk={this.talk} />
    </div>
    )
  }
}

export default Talker