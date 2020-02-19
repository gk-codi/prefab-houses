import React from 'react';
import Slider  from 'react-input-slider';
import './price.css'



  export default class Price extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 330,
        error:undefined
        
      };
    }
  
render(){
  return (
    
    <div className="pricemod" style={{textAlign:"center"}}>
      <h3>Please choose your specified area</h3>
      
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
        x={this.state.x}
        onChange={({ x }) => this.setState({ x: parseFloat(x.toFixed(2)) })}
       
      />
      <br/><br/>
      <div>{'Area: ' + this.state.x+' m2'}</div>
      <h5><b>{'Total Price: ' + this.state.x*this.props.price +' $'}</b></h5>
    </div>
    

  );
}
}
