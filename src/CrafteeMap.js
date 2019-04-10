import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const CrafteeApp_key = process.env.REACT_APP_API_KEY_Craftee_Goog;

class CrafteeMap extends React.Component {
  render() {
    console.log(CrafteeApp_key);
    return (
      <div className="map">
        <Map
          className="map"
          style={{
            height: 350,
            width: "100%",
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "center",
            padding: 0
          }}
          google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: 51.5085,
            lng: -0.1257
          }}
          onClick={this.mapClicked}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: CrafteeApp_key
})(CrafteeMap);
