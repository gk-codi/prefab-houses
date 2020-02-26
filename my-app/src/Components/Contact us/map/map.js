import React, { Component } from 'react';
import {InfoWindow, Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import "./map.css";




class SimpleMap extends Component {

  
  render() {
    const mapStyles = {
      width: '33%',
      height: '30%',
      marginLeft: '110px',
      position:"absolute", 
      top:"70%",
      
    };
   
    return (
      <div id="mapbox">
        <Map
          google={this.props.google}
          zoom={7}
          style={mapStyles}
          onClick={this.onMapClicked}
          initialCenter={{ lat: 33.8547, lng: 35.8623}}
        >
          <Marker name={'Dolores park'} position={{ lat: 33.8951, lng: 35.5095}}  />
          <Marker name={'Dolores park'} position={{ lat: 34.4346, lng: 35.8362}} />
    
        </Map>
      </div>
    );
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBYsDnYUModVogpaaOk_GbVaNBIHhwSXnw'
})(SimpleMap);
