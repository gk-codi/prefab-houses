import React from 'react';
import Price from '../price slider/price';
import "./modalComp.css"




  export default class ModalsComp extends React.Component {
    
render(){
  return (
    
   <div className="imgmodcont" style={{display:'flex',margin:'50px'}}>
        <img style={{flex:'55%',width:'100%',marginRight:'10px'}} src={this.props.img}/>
        <div style={{flex:'40%',display:'grid',gridColumn:'50% 50%'}}>
        <p style={{textAlign:'center',marginTop:'20px'}}><h4 style={{color:'#cb4154'}}><b>{this.props.title}</b></h4><br/>{this.props.des}</p>
        <Price  price={this.props.price}></Price>
        </div>
   </div>

  );
}
}
