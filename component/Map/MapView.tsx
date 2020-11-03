import { RefObject } from "react";
import ReactMapGL from "react-map-gl";
import { MapConst } from "../../styles/service/map/const";

// const useStyles = makeStyles((theme) => ({
//   map: {
//     "min-height": "80vh",
//   },
// }));

export interface MapViewPort {
  width: number | string;
  height: number | string;
  latitude: number;
  longitude: number;
  zoom: number;
}

export const DEFAULT_MAP_VIEWPORT: MapViewPort = {
  width: "100%",
  height: "90vh",
  latitude: MapConst.POINT_TOKYO_STATION.lat,
  longitude: MapConst.POINT_TOKYO_STATION.lng,
  zoom: 10,
};

interface Props {
  children?: React.ReactNode;
  mapRef?: RefObject<any>;
  viewport?: MapViewPort;
  onViewportChange?: (viewPort: MapViewPort) => MapViewPort;
}

const MapView: React.FC<Props> = (props) => {
  return (
    <ReactMapGL
      mapStyle={MapConst.StyleId.STREET}
      mapboxApiAccessToken={MapConst.ACCESS_TOKEN}
      {...props.viewport}
      onViewportChange={(viewport) => {
        return props.onViewportChange(viewport);
      }}
    >
      {props.children && props.children}
    </ReactMapGL>
  );
};

export default MapView;
