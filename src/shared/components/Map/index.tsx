import { GoogleMap, Circle, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -33.9106,
  lng: 151.15,
};

export interface IMapProps {}

const Map = (props: IMapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13.2}>
      <Circle
        radius={4000}
        center={center}
        options={{ fillColor: "rgba(0,0,0,0)", strokeColor: "green" }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
