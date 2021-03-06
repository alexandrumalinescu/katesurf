import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import '../Css/GoogleMaps.css'

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div className='googlemaps'>
        <Map google={this.props.google} onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA4WZVgyVFWRwW-JD1-qBojpP5sW9-5Rew",
})(MapContainer);
