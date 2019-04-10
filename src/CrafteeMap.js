import React from "react";
import { withGoogleMap, GoogleMap } from "react-google-maps";

class CrafteeMap extends React.Component {
  render() {
    const CrafteeGoogle = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 51.440739, lng: -0.122317 }}
        defaultZoom={13}
      />
    ));
    return (
      <div>
        <CrafteeGoogle
          containerElement={<div style={{ height: 300, width: 300 }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
export default CrafteeMap;
