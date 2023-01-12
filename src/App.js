import React from 'react';
import ToyBox from './Components/useState/ToyBox';
import ParentComponent from './Components/props part 1/parentComponent';
import FormExample from './Components/props part 2/FormExample';
import { Talker } from './Components/props alert/Talker';

function App() {
  return (
    <>
    <ToyBox />

    <ParentComponent />
    <FormExample />
    <Talker />
    </>
  );
}

export default App;
