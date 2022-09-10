import React from 'react';
import { TextInput } from './TextInput';

const App: React.FC = () => {
  const i = 2
  return (
    //pass required props so that TS will not be sad
    <TextInput 
      text='gegeg' 
      person={{firstName: '', lastName: ''}} 
      fn={(str)=>str} 
      i={i} 
      ok={false}
    />
  )
}

export default App
