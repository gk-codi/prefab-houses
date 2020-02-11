import React, { Component } from 'react';
import {InfoWindow, Map, GoogleApiWrapper, Marker } from 'google-maps-react';




class SimpleMap extends Component {

  
  render() {
    const mapStyles = {
      width: '84%',
      height: '84%',
      marginLeft: '90px',
    };
   
    return (
        <Map
          google={this.props.google}
          zoom={9}
          style={mapStyles}
          onClick={this.onMapClicked}
          initialCenter={{ lat: 33.8547, lng: 35.8623}}
        >
          <Marker name={'Dolores park'} position={{ lat: 33.8951, lng: 35.5095}}  />
          <Marker name={'Dolores park'} position={{ lat: 34.4346, lng: 35.8362}} />
    
        </Map>
    );
  }

}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBYsDnYUModVogpaaOk_GbVaNBIHhwSXnw'
})(SimpleMap);
