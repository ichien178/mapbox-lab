import mapboxgl from "mapbox-gl";
import { MapConst } from "./const";

export class MapContainer {
  private map: mapboxgl.Map | null = null;
  private initialized = false;
  private static instance: MapContainer;

  private constructor() {
  };

  public static getInstance = (): MapContainer => {
    if (!MapContainer.instance) {
      MapContainer.instance = new MapContainer();
    }

    return MapContainer.instance;
  }

  public init = () => {
    if (this.initialized) {
      return;
    };

    mapboxgl.accessToken = MapConst.ACCESS_TOKEN;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: MapConst.StyleId.STREET,
      center: [MapConst.POINT_TOKYO_STATION.lng, MapConst.POINT_TOKYO_STATION.lat],
      zoom: 11
    });
  };

  public getMap(): mapboxgl.Map | null {
    if (this.map) {
      return this.map;
    };
    return null;
  };
}