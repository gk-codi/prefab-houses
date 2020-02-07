import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import { useState } from 'react';
import Slider  from 'react-input-slider';


 
 export default function Price() {
  const [state, setState] = useState({ x: 330});
  

  return (
    <div style={{textAlign:"center"}}>
      <h3>Please choose your specified area</h3>
      <br/><br/>
      <Slider
  styles={{
    
    track: {
      backgroundColor: 'lightgray',
      width:'80%'
    },
    active: {
      backgroundColor: '#cb4154'
    }
  }}
        axis="x"
        xstep={10}
        xmin={0}
        xmax={1000}
        x={state.x}
        onChange={({ x }) => setState({ x: parseFloat(x.toFixed(2)) })}
       
      />
      <br/><br/>
      <div>{'Area: ' + state.x+' m2'}</div><br/>
      <h5><b>{'Total Price: ' + state.x*100 +' $'}</b></h5>
    </div>
  );
}
