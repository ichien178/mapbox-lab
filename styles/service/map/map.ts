import mapboxgl from "mapbox-gl";
import { MapConst } from "./const";

class MapContainer {
  private map: mapboxgl.Map | null = null;
  private initialized = false;
  private static instance: MapContainer;

  private constructor() {}

  public static getInstance = (): MapContainer => {
    if (!MapContainer.instance) {
      MapContainer.instance = new MapContainer();
    }

    return MapContainer.instance;
  };

  public init = (container: HTMLElement | string): mapboxgl.Map => {
    if (this.initialized) {
      this.map.remove();
      this.map = null;
    }

    mapboxgl.accessToken = MapConst.ACCESS_TOKEN;
    this.map = new mapboxgl.Map({
      container: container,
      style: MapConst.StyleId.STREET,
      center: [
        MapConst.POINT_TOKYO_STATION.lng,
        MapConst.POINT_TOKYO_STATION.lat,
      ],
      zoom: 11,
    });
    return this.map;
  };

  public getMap(): mapboxgl.Map | null {
    if (this.map) {
      return this.map;
    }
    return null;
  }
}

export default MapContainer;
