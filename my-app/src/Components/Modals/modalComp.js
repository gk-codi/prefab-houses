import React from 'react';
import Price from './price slider/price';



  export default class ModalsComp extends React.Component {
    
render(){
  return (
    
   <div style={{display:'flex',height:'350px'}}>
        <img style={{flex:'55%',width:'100%'}} src={this.props.img}/>
        <div style={{flex:'40%',display:'grid',gridColumn:'50% 50%'}}>
        <p style={{textAlign:'center',marginTop:'40px'}}>{this.props.des}</p>
        <Price  price={this.props.price}></Price>
        </div>
   </div>

  );
}
}
