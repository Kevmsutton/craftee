import React from "react";
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";

const goog_key = process.env.REACT_APP_API_KEY_Craftee_Goog;

class CrafteeMap extends React.Component {
  state = {
    lat: null,
    lng: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      const coords = pos.coords;
      this.setState({
        lat: coords.latitude,
        lng: coords.longitude
      });
    });
  }
  render() {
    console.log(this.state.lat);
    const CrafteeGoogle = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{
          lat: this.state.lat,
          lng: this.state.lng
        }}
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
        {!this.state.lat ? (
          <h3>Loading...</h3>
        ) : (
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
        )}
      </div>
    );
  }
}
export default CrafteeMap;
