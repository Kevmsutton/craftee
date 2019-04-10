import React from "react";
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";

const goog_key = process.env.REACT_APP_API_KEY_Craftee_Goog;

class CrafteeMap extends React.Component {
  render() {
    const CrafteeGoogle = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 51.440739, lng: -0.122317 }}
        defaultZoom={16}
      />
    ));
    return (
      <div
        className="test"
        style={{
          height: "700px",
          width: "35%",
          display: "flex",
          flexFlow: "row nowrap",
          justifyContent: "center"
        }}
      >
        <CrafteeGoogle
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                width: "100%"
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
export default CrafteeMap;
