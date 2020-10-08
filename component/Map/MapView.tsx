import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { MapConst } from "../../service/map/const";

// const useStyles = makeStyles((theme) => ({
//   map: {
//     "min-height": "80vh",
//   },
// }));

interface MapViewPort {
  width: number | string;
  height: number | string;
  latitude: number;
  longitude: number;
  zoom: number;
}

const defaultMapViewPort: MapViewPort = {
  width: "100%",
  height: "90vh",
  latitude: MapConst.POINT_TOKYO_STATION.lat,
  longitude: MapConst.POINT_TOKYO_STATION.lng,
  zoom: 10,
};

const MapView = ({ children, props }) => {
  const [design, setViewPort] = useState<MapViewPort>(defaultMapViewPort);
  return (
    <ReactMapGL
      mapStyle={MapConst.StyleId.STREET}
      mapboxApiAccessToken={MapConst.ACCESS_TOKEN}
      {...design}
      onViewportChange={(viewport) =>
        setViewPort({
          width: viewport.width,
          height: viewport.height,
          latitude: viewport.latitude,
          longitude: viewport.longitude,
          zoom: viewport.zoom,
        })
      }
    >
      {children}
    </ReactMapGL>
  );
};

export default MapView;