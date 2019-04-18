import React from "react";
import { Marker } from "react-google-maps";
const myMarkers = [{ lat: 51.43523, lng: -0.12 }];

export default class CrafteeMarker extends React.Component {
  render() {
    return (
      <React.Fragment>
        {myMarkers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </React.Fragment>
    );
  }
}
