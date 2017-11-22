import React, { Component } from 'react';
/*global google*/

class Map extends Component {
  componentDidMount(){
      var map = new google.maps.Map(this.refs.map,{
        zoom:12,
        center:{
          lat: this.props.lat,
          lng: this.props.lon
          }
      });
    new google.maps.Marker({
        map: map,
        position: {
            lat: this.props.lat,
            lng: this.props.lon
          }
  });
}
  
  render() {
    return (
      <div ref="map">
      
      </div>
    );
  }
}

export default Map;
