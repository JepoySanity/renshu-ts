import React from 'react';
import { TextInput } from './TextInput';
import UseEffectx from './UseEffectx';

const App: React.FC = () => {
  const i = 2
  return (
    <>
      {false ? ( 
          <TextInput 
            text='gegeg' 
            person={{firstName: '', lastName: ''}} 
            fn={(str)=>str} 
            i={i} 
            ok={false}
          />
        ) : (
          <UseEffectx/>
        )
      }
    </>
  )
}

export default App
